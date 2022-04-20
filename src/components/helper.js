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