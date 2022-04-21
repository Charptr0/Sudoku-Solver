export function flatten(data)
{
	const flattenBoard = []

	data.forEach((row) => {
		row.forEach((val) => {
			flattenBoard.push(val);
		})
	})

	return flattenBoard;
}

export function isValidSquare(board, row, col)
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

export function isAvailable(board, row, col, n)
{
    // get row numbers
    for(let i = 0; i < board.length; i++) {
        if(board[row][i] === n) {
            return false;
        }
    }

    // get col numbers
    for(let i = 0; i < board.length; i++) {
        if(board[i][col] === n) {
			return false;
        }
    }
    
    // get square numbers
	let startRow = row - (row % 3);
	let startCol = col - (col % 3);

	for(let i = 0; i < 3; i++) {
		for(let j = 0; j < 3; j++) {
			if (board[i + startRow][j + startCol] == n) return false;
		}
	}

	return true;
}