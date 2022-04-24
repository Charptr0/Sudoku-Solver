const express = require('express');
const db = require("./database");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_KEY;
const password = process.env.PASSWORD;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));

function flatten(board)
{
	const flattenBoard = [];

	board.forEach((row) => {
		row.forEach((val) => {
			flattenBoard.push(val);
		})
	})

	return flattenBoard;
}

function validateBoard(req, res, next) 
{
	if(req.body.password !== password) {
		res.render("fail", {reason : "Password is not correct"});
		return;
	}

  function isValidCell(board, row, col) {
    let nums = []

    function validateNumbers() {
      nums.sort();
    
      for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== (i + 1)) return false;
      }
  
      nums = [];
  
      return true
    }
  
    // check row
    for(let i = 0; i < board[row].length; i++) {
      if(board[row][i] === 0) return false;
      else nums.push(board[row][i]);
    } if(!validateNumbers()) return false;
  
    // check cols
    for(let i = 0; i < board.length; i++) {
      if(board[i][col] === 0) return false;
      else nums.push(board[i][col]);
    } if(!validateNumbers()) return false;
  
    // get square numbers
    let startRow = row - (row % 3);
    let startCol = col - (col % 3);
  
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        nums.push(board[i + startRow][j + startCol]);
      }
    }
  
    return validateNumbers();
  }

  const board = [
    [req.body.r0c0,req.body.r0c1,req.body.r0c2,req.body.r0c3,req.body.r0c4,req.body.r0c5,req.body.r0c6,req.body.r0c7,req.body.r0c8],
    [req.body.r1c0,req.body.r1c1,req.body.r1c2,req.body.r1c3,req.body.r1c4,req.body.r1c5,req.body.r1c6,req.body.r1c7,req.body.r1c8],
    [req.body.r2c0,req.body.r2c1,req.body.r2c2,req.body.r2c3,req.body.r2c4,req.body.r2c5,req.body.r2c6,req.body.r2c7,req.body.r2c8],
    [req.body.r3c0,req.body.r3c1,req.body.r3c2,req.body.r3c3,req.body.r3c4,req.body.r3c5,req.body.r3c6,req.body.r3c7,req.body.r3c8],
    [req.body.r4c0,req.body.r4c1,req.body.r4c2,req.body.r4c3,req.body.r4c4,req.body.r4c5,req.body.r4c6,req.body.r4c7,req.body.r4c8],
    [req.body.r5c0,req.body.r5c1,req.body.r5c2,req.body.r5c3,req.body.r5c4,req.body.r5c5,req.body.r5c6,req.body.r5c7,req.body.r5c8],
    [req.body.r6c0,req.body.r6c1,req.body.r6c2,req.body.r6c3,req.body.r6c4,req.body.r6c5,req.body.r6c6,req.body.r6c7,req.body.r6c8],
    [req.body.r7c0,req.body.r7c1,req.body.r7c2,req.body.r7c3,req.body.r7c4,req.body.r7c5,req.body.r7c6,req.body.r7c7,req.body.r7c8],
    [req.body.r8c0,req.body.r8c1,req.body.r8c2,req.body.r8c3,req.body.r8c4,req.body.r8c5,req.body.r8c6,req.body.r8c7,req.body.r8c8]
  ];
  
	// convert the board into integers
	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board.length; j++) {
			board[i][j] = parseInt(board[i][j]);
		}
	}

	for(let i = 0; i < board.length; i++) {
		for(let j = 0; j < board.length; j++) {
			if(board[i][j] === '') {
				res.render("fail", {reason : "The Board is not valid"});
				return;
			}

			if(!isValidCell(board, i , j))  {
				res.render("fail", {reason : "The Board is not Valid"});
				return;
			}
    	}
  	}

	// flatten board
	const flattenBoard = flatten(board);

	// add the board to the database
	const sudokuBoard = new db.SudokuBoard({
		board : flattenBoard
	});

	sudokuBoard.save()
		.then((result) => {
			console.log(result);
			next();
		})
		.catch((err) => console.log(err))
}

/**
 * Route to home page
 */
app.get('/', (req, res) => {
	res.render("index");
})

/**
 * Route to add a board to DB page
 */
app.get("/add", (req, res) => {
  	res.render("add");
})

app.post("/result", validateBoard, (req, res) => {
	res.render("success", {reason : "The board has been successfully added to the database"});
})

/**
 * Fetch from DB
 */
app.get("/board", (req, res) => {
	db.SudokuBoard.find()
		.then((result) => {
		if(result.length === 0) {
			res.send("No Entries in DB");
			return;
		}

		const index = Math.floor(Math.random() * result.length);
		const board = result[index].board;
		const unSolvedBoard = [];

		board.forEach((val) => {
			if(Math.floor(Math.random() * 100) <= 50) {
				unSolvedBoard.push(0);
			}

			else {
				unSolvedBoard.push(val);
			}
		})

		res.send(unSolvedBoard);
		})
		.catch(err => console.log(err));
})

/**
 * Connect to DB and start the server
 */
db.mongoose.connect(DB_URL, {
	useUnifiedTopology: true,
	useNewUrlParser: true })
		.then(() => {
			console.log("DB Connected");

			app.listen(port, () => {
			console.log(`Example app listening on port ${port}`)});

		}).catch(err => console.log(err))