const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sudokuBoardSchema = new Schema({
    board : {
        type : Array,
        required: true
    }
}, {timestamps : true})

const SudokuBoard = mongoose.model("solvedBoards", sudokuBoardSchema);

module.exports = {
    mongoose,
    SudokuBoard,
}