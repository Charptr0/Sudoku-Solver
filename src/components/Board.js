import React from "react";
import styles from "./board.module.css";

function Board()
{
    return (
        <div id={styles.game_board}><h1>Sudoku Solver</h1>
            <table> 
                <tbody>
                    <tr></tr> <td></td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>1</td> <td>4</td> <td>4</td>
                    <tr></tr> <td>1</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>1</td> <td>4</td> <td>4</td>
                    <tr></tr> <td>1</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>1</td> <td>4</td> <td>4</td>
                </tbody>
                <tbody>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                </tbody>
                <tbody>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                    <tr></tr> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td>4</td> <td></td> <td>4</td> <td>4</td>
                </tbody>
            </table>
    </div>

    )
}

export default Board;