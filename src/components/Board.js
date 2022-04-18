import React, { useEffect, useRef } from "react";
import styles from "./board.module.css";
import Options from "./Options";

function sleep(ms) {return new Promise(resolve => setTimeout(resolve, ms))}

function flatten(data)
{
	const flattenBoard = []

	data.forEach((row) => {
		row.forEach((val) => {
			flattenBoard.push(val);
		})
	})

	return flattenBoard;
}

function isValidSquare(board, row, col)
{	
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

	// check the first square
	if(row <= 2 && col <= 2) {
		nums.push(board[0][0], board[0][1], board[0][2], 
			board[1][0], board[1][1], board[1][2],
			board[2][0], board[2][1], board[2][2]);

		return validateNumbers();
	}

	// check the second square
	else if(col >= 3 && col <= 5 && row <= 2) {
		nums.push(board[0][3], board[0][4], board[0][5], 
			board[1][3], board[1][4], board[1][5],
			board[2][3], board[2][4], board[2][5]);

		return validateNumbers();
	}

	// check the third square
	else if(col >= 6 && col <= 8 && row <= 2) {
		nums.push(board[0][6], board[0][7], board[0][8], 
			board[1][6], board[1][7], board[1][8],
			board[2][6], board[2][7], board[2][8]);

		return validateNumbers();
	}

	// check the fourth square
	else if(row >= 3 && row <= 5 && col <= 2) {
		nums.push(board[3][0], board[3][1], board[3][2], 
			board[4][0], board[4][1], board[4][2],
			board[5][0], board[5][1], board[5][2]);

		return validateNumbers();
	}

	// check the fifth square
	else if(row >= 3 && row <= 5 && col >= 3 && col <= 5) {
		nums.push(board[3][3], board[3][4], board[3][5], 
			board[4][3], board[4][4], board[4][5],
			board[5][3], board[5][4], board[5][5]);

		return validateNumbers();
	}

	// check the sixth square
	else if(row >= 3 && row <= 5 && col >= 6 && col <= 8) {
		nums.push(board[3][6], board[3][7], board[3][8], 
			board[4][6], board[4][7], board[4][8],
			board[5][6], board[5][7], board[5][8]);

		return validateNumbers();
	}

	// check the seventh square
	else if(row >= 6 && row <= 8 && col <= 2) {
		nums.push(board[6][0], board[6][1], board[6][2], 
			board[7][0], board[7][1], board[7][2],
			board[8][0], board[8][1], board[8][2]);

		return validateNumbers();
	}

	// check the eighth square
	else if(row >= 6 && row <= 8 && col >= 3 && col <= 5) {
		nums.push(board[6][3], board[6][4], board[6][5], 
			board[7][3], board[7][4], board[7][5],
			board[8][3], board[8][4], board[8][5]);

		return validateNumbers();
	}

	// check the ninth square
	else if(row >= 6 && row <= 8 && col >= 6 && col <= 8) {
		nums.push(board[6][6], board[6][7], board[6][8], 
			board[7][6], board[7][7], board[7][8],
			board[8][6], board[8][7], board[8][8]);

		return validateNumbers();
	}

	return false;
}

function Board()
{	
	const refs = {
		"r0c0" : useRef(null),"r0c1" : useRef(null),"r0c2" : useRef(null),"r0c3" : useRef(null),"r0c4" : useRef(null),
        "r0c5" : useRef(null),"r0c6" : useRef(null),"r0c7" : useRef(null),"r0c8" : useRef(null),

		"r1c0" : useRef(null),"r1c1" : useRef(null),"r1c2" : useRef(null),"r1c3" : useRef(null),"r1c4" : useRef(null),
        "r1c5" : useRef(null),"r1c6" : useRef(null),"r1c7" : useRef(null),"r1c8" : useRef(null),

        "r2c0" : useRef(null),"r2c1" : useRef(null),"r2c2" : useRef(null),"r2c3" : useRef(null),"r2c4" : useRef(null),
        "r2c5" : useRef(null),"r2c6" : useRef(null),"r2c7" : useRef(null),"r2c8" : useRef(null),

		"r3c0" : useRef(null),"r3c1" : useRef(null),"r3c2" : useRef(null),"r3c3" : useRef(null),"r3c4" : useRef(null),
        "r3c5" : useRef(null),"r3c6" : useRef(null),"r3c7" : useRef(null),"r3c8" : useRef(null),

		"r4c0" : useRef(null),"r4c1" : useRef(null),"r4c2" : useRef(null),"r4c3" : useRef(null),"r4c4" : useRef(null),
        "r4c5" : useRef(null),"r4c6" : useRef(null),"r4c7" : useRef(null),"r4c8" : useRef(null),

		"r5c0" : useRef(null),"r5c1" : useRef(null),"r5c2" : useRef(null),"r5c3" : useRef(null),"r5c4" : useRef(null),
        "r5c5" : useRef(null),"r5c6" : useRef(null),"r5c7" : useRef(null),"r5c8" : useRef(null),

		"r6c0" : useRef(null),"r6c1" : useRef(null),"r6c2" : useRef(null),"r6c3" : useRef(null),"r6c4" : useRef(null),
        "r6c5" : useRef(null),"r6c6" : useRef(null),"r6c7" : useRef(null),"r6c8" : useRef(null),

		"r7c0" : useRef(null),"r7c1" : useRef(null),"r7c2" : useRef(null),"r7c3" : useRef(null),"r7c4" : useRef(null),
        "r7c5" : useRef(null),"r7c6" : useRef(null),"r7c7" : useRef(null),"r7c8" : useRef(null),

		"r8c0" : useRef(null),"r8c1" : useRef(null),"r8c2" : useRef(null),"r8c3" : useRef(null),"r8c4" : useRef(null),
        "r8c5" : useRef(null),"r8c6" : useRef(null),"r8c7" : useRef(null),"r8c8" : useRef(null),
    }

	useEffect(() => {
		const data = [
			[8,2,7,1,5,4,3,9,6],
			[9,6,5,3,2,7,1,4,8],
			[3,4,1,6,8,9,7,5,2],
			[5,9,3,4,6,8,2,7,1],
			[4,7,2,5,1,3,6,8,9],
			[6,1,8,9,7,2,4,3,5],
			[7,8,6,2,3,5,9,1,4],
			[1,5,4,7,9,6,8,2,3],
			[2,3,9,8,4,1,5,6,7]];
		
		const flattenBoard = flatten(data);

		Object.keys(refs).forEach((key, index)=> {
			if(flattenBoard[index] !== 0) {
				refs[key].current.value = flattenBoard[index];
			}
		})
	})

	// solve button handler
    function solve()
    {

    }

	// clear button handler
    function clearBoard()
    {
        Object.keys(refs).forEach((key) => {
			refs[key].current.value = "";
        })
    }

	// validate button handler
	function validate()
	{
		const board = []
		let row = []

		Object.keys(refs).forEach((k) => {
			const input = refs[k].current.value === "" ? 0 : parseInt(refs[k].current.value);

			if(row.length < 9) {
				row.push(input);
			}

			else {
				board.push(row);
				row = []
				row.push(input);
			}
		})

		// push the last row
		board.push(row);

		/**
		 * ValidHandler, but with support for the wait function
		 */
		async function validateHelper()
		{
			for(let i = 0; i < board.length; i++) {
				for(let j = 0; j < board[i].length; j++) {
					const id = "r" + i + "c" + j;
					
					refs[id].current.style.backgroundColor = "orange";

					if(isValidSquare(board, i, j)) {					
						await sleep(100); 
						refs[id].current.style.backgroundColor = "green";
					}

					else {
						refs[id].current.style.backgroundColor = "red";
						return;
					}
				}
			}
		}
		
		validateHelper();		
	}

    return (
            <div id={styles.game_board}><h1>Sudoku Solver</h1>
            <Options solve={solve} clear={clearBoard} validate={validate} />
			<table> 
                <tbody>
					<tr>
						<td><input id="r0c0" type={"number"} min={1} max={9} ref={refs.r0c0}></input></td> 
						<td><input id="r0c1" type={"number"} min={1} max={9} ref={refs.r0c1}></input></td> 
						<td><input id="r0c2" type={"number"} min={1} max={9} ref={refs.r0c2}></input></td> 
						<td><input id="r0c3" type={"number"} min={1} max={9} ref={refs.r0c3}></input></td> 
						<td><input id="r0c4" type={"number"} min={1} max={9} ref={refs.r0c4}></input></td> 
						<td><input id="r0c5" type={"number"} min={1} max={9} ref={refs.r0c5}></input></td> 
						<td><input id="r0c6" type={"number"} min={1} max={9} ref={refs.r0c6}></input></td> 
						<td><input id="r0c7" type={"number"} min={1} max={9} ref={refs.r0c7}></input></td> 
						<td><input id="r0c8" type={"number"} min={1} max={9} ref={refs.r0c8}></input></td>                      
					</tr> 
					<tr>
						<td><input id="r1c0" type={"number"} min={1} max={9} ref={refs.r1c0}></input></td> 
						<td><input id="r1c1" type={"number"} min={1} max={9} ref={refs.r1c1}></input></td> 
						<td><input id="r1c2" type={"number"} min={1} max={9} ref={refs.r1c2}></input></td> 
						<td><input id="r1c3" type={"number"} min={1} max={9} ref={refs.r1c3}></input></td> 
						<td><input id="r1c4" type={"number"} min={1} max={9} ref={refs.r1c4}></input></td> 
						<td><input id="r1c5" type={"number"} min={1} max={9} ref={refs.r1c5}></input></td> 
						<td><input id="r1c6" type={"number"} min={1} max={9} ref={refs.r1c6}></input></td> 
						<td><input id="r1c7" type={"number"} min={1} max={9} ref={refs.r1c7}></input></td> 
						<td><input id="r1c8" type={"number"} min={1} max={9} ref={refs.r1c8}></input></td>      
					</tr>
					<tr>
						<td><input id="r2c0" type={"number"} min={1} max={9} ref={refs.r2c0}></input></td> 
						<td><input id="r2c1" type={"number"} min={1} max={9} ref={refs.r2c1}></input></td> 
						<td><input id="r2c2" type={"number"} min={1} max={9} ref={refs.r2c2}></input></td> 
						<td><input id="r2c3" type={"number"} min={1} max={9} ref={refs.r2c3}></input></td> 
						<td><input id="r2c4" type={"number"} min={1} max={9} ref={refs.r2c4}></input></td> 
						<td><input id="r2c5" type={"number"} min={1} max={9} ref={refs.r2c5}></input></td> 
						<td><input id="r2c6" type={"number"} min={1} max={9} ref={refs.r2c6}></input></td> 
						<td><input id="r2c7" type={"number"} min={1} max={9} ref={refs.r2c7}></input></td> 
						<td><input id="r2c8" type={"number"} min={1} max={9} ref={refs.r2c8}></input></td>
					</tr></tbody>
                <tbody>
					<tr>
						<td><input id="r3c0" type={"number"} min={1} max={9} ref={refs.r3c0}></input></td> 
						<td><input id="r3c1" type={"number"} min={1} max={9} ref={refs.r3c1}></input></td> 
						<td><input id="r3c2" type={"number"} min={1} max={9} ref={refs.r3c2}></input></td> 
						<td><input id="r3c3" type={"number"} min={1} max={9} ref={refs.r3c3}></input></td> 
						<td><input id="r3c4" type={"number"} min={1} max={9} ref={refs.r3c4}></input></td> 
						<td><input id="r3c5" type={"number"} min={1} max={9} ref={refs.r3c5}></input></td> 
						<td><input id="r3c6" type={"number"} min={1} max={9} ref={refs.r3c6}></input></td> 
						<td><input id="r3c7" type={"number"} min={1} max={9} ref={refs.r3c7}></input></td> 
						<td><input id="r3c8" type={"number"} min={1} max={9} ref={refs.r3c8}></input></td> 
					</tr> 
					<tr>
						<td><input id="r4c0" type={"number"} min={1} max={9} ref={refs.r4c0}></input></td> 
						<td><input id="r4c1" type={"number"} min={1} max={9} ref={refs.r4c1}></input></td> 
						<td><input id="r4c2" type={"number"} min={1} max={9} ref={refs.r4c2}></input></td> 
						<td><input id="r4c3" type={"number"} min={1} max={9} ref={refs.r4c3}></input></td> 
						<td><input id="r4c4" type={"number"} min={1} max={9} ref={refs.r4c4}></input></td> 
						<td><input id="r4c5" type={"number"} min={1} max={9} ref={refs.r4c5}></input></td> 
						<td><input id="r4c6" type={"number"} min={1} max={9} ref={refs.r4c6}></input></td> 
						<td><input id="r4c7" type={"number"} min={1} max={9} ref={refs.r4c7}></input></td> 
						<td><input id="r4c8" type={"number"} min={1} max={9} ref={refs.r4c8}></input></td>                
					</tr>
					<tr>
						<td><input id="r5c0" type={"number"} min={1} max={9} ref={refs.r5c0}></input></td> 
						<td><input id="r5c1" type={"number"} min={1} max={9} ref={refs.r5c1}></input></td> 
						<td><input id="r5c2" type={"number"} min={1} max={9} ref={refs.r5c2}></input></td> 
						<td><input id="r5c3" type={"number"} min={1} max={9} ref={refs.r5c3}></input></td> 
						<td><input id="r5c4" type={"number"} min={1} max={9} ref={refs.r5c4}></input></td> 
						<td><input id="r5c5" type={"number"} min={1} max={9} ref={refs.r5c5}></input></td> 
						<td><input id="r5c6" type={"number"} min={1} max={9} ref={refs.r5c6}></input></td> 
						<td><input id="r5c7" type={"number"} min={1} max={9} ref={refs.r5c7}></input></td> 
						<td><input id="r5c8" type={"number"} min={1} max={9} ref={refs.r5c8}></input></td>  
					</tr></tbody>
					<tbody>
                        <tr>
							<td><input id="r6c0" type={"number"} min={1} max={9} ref={refs.r6c0}></input></td> 
							<td><input id="r6c1" type={"number"} min={1} max={9} ref={refs.r6c1}></input></td> 
							<td><input id="r6c2" type={"number"} min={1} max={9} ref={refs.r6c2}></input></td> 
							<td><input id="r6c3" type={"number"} min={1} max={9} ref={refs.r6c3}></input></td> 
							<td><input id="r6c4" type={"number"} min={1} max={9} ref={refs.r6c4}></input></td> 
							<td><input id="r6c5" type={"number"} min={1} max={9} ref={refs.r6c5}></input></td> 
							<td><input id="r6c6" type={"number"} min={1} max={9} ref={refs.r6c6}></input></td> 
							<td><input id="r6c7" type={"number"} min={1} max={9} ref={refs.r6c7}></input></td> 
							<td><input id="r6c8" type={"number"} min={1} max={9} ref={refs.r6c8}></input></td>  
                        </tr> 
                        <tr>
							<td><input id="r7c0" type={"number"} min={1} max={9} ref={refs.r7c0}></input></td> 
							<td><input id="r7c1" type={"number"} min={1} max={9} ref={refs.r7c1}></input></td> 
							<td><input id="r7c2" type={"number"} min={1} max={9} ref={refs.r7c2}></input></td> 
							<td><input id="r7c3" type={"number"} min={1} max={9} ref={refs.r7c3}></input></td> 
							<td><input id="r7c4" type={"number"} min={1} max={9} ref={refs.r7c4}></input></td> 
							<td><input id="r7c5" type={"number"} min={1} max={9} ref={refs.r7c5}></input></td> 
							<td><input id="r7c6" type={"number"} min={1} max={9} ref={refs.r7c6}></input></td> 
							<td><input id="r7c7" type={"number"} min={1} max={9} ref={refs.r7c7}></input></td> 
							<td><input id="r7c8" type={"number"} min={1} max={9} ref={refs.r7c8}></input></td>    
                        </tr>
                        <tr>
							<td><input id="r8c0" type={"number"} min={1} max={9} ref={refs.r8c0}></input></td> 
							<td><input id="r8c1" type={"number"} min={1} max={9} ref={refs.r8c1}></input></td> 
							<td><input id="r8c2" type={"number"} min={1} max={9} ref={refs.r8c2}></input></td> 
							<td><input id="r8c3" type={"number"} min={1} max={9} ref={refs.r8c3}></input></td> 
							<td><input id="r8c4" type={"number"} min={1} max={9} ref={refs.r8c4}></input></td> 
							<td><input id="r8c5" type={"number"} min={1} max={9} ref={refs.r8c5}></input></td> 
							<td><input id="r8c6" type={"number"} min={1} max={9} ref={refs.r8c6}></input></td> 
							<td><input id="r8c7" type={"number"} min={1} max={9} ref={refs.r8c7}></input></td> 
							<td><input id="r8c8" type={"number"} min={1} max={9} ref={refs.r8c8}></input></td>   
                        </tr></tbody></table></div>)
}

export default Board;