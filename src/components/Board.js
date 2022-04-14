import React from "react";
import styles from "./board.module.css";

function Board()
{
    return (
        <div id={styles.game_board}><h1>Sudoku Solver</h1>
            <table> 
                <tbody>
                    <tr></tr> <td><input id="r0c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r0c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r1c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r1c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r2c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r2c8" type={"number"} min={1} max={9}></input></td> 
                </tbody>
                <tbody>
                <tr></tr> <td><input id="r3c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r3c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r4c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r4c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r5c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r5c8" type={"number"} min={1} max={9}></input></td> 
                </tbody>
                <tbody>
                <tr></tr> <td><input id="r6c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r6c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r7c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r7c8" type={"number"} min={1} max={9}></input></td> 

                    <tr></tr><td><input id="r8c0" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c1" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c2" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c3" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c4" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c5" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c6" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c7" type={"number"} min={1} max={9}></input></td> 
                              <td><input id="r8c8" type={"number"} min={1} max={9}></input></td> 
                </tbody>
            </table>
    </div>

    )
}

export default Board;