import React, { useEffect, useRef } from "react";
import styles from "./board.module.css";
import Options from "./Options";

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
			0,6,5,2,0,8,1,4,7,
			0,2,1,0,7,0,0,0,0,
			0,3,4,9,1,5,0,8,6,
			6,0,0,5,0,0,3,1,0,
			5,0,7,0,0,0,0,2,8,
			0,0,8,0,9,0,0,0,0,
			1,0,0,0,0,0,0,0,3,
			0,0,0,0,6,9,8,7,0,
			0,0,6,8,0,3,0,0,0];

		Object.keys(refs).forEach((key, index)=> {
			if(data[index] !== 0) {
				refs[key].current.value = data[index];
			}
		})
	}, [])

    function solve()
    {
        if(refs.r0c0.current.value === "") {
			console.log("true");
        }
        else {
			console.log(refs.r0c0.current.value);
        }
    }

    function clearBoard()
    {
        Object.keys(refs).forEach((key) => {
			refs[key].current.value = "";
        })
    }

    return (
            <div id={styles.game_board}><h1>Sudoku Solver</h1>
            <Options solve={solve} clear={clearBoard} />
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