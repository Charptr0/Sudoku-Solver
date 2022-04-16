import React from "react";
import { Button } from "react-bootstrap";
import styles from "./options.module.css";

function Options(props)
{
    return (<div id={styles.options_div}>
        <Button variant="danger" size="lg">Reset</Button>{' '}
        <Button size="lg">Regenerate</Button>{' '}
        <Button variant="success"  size="lg" onClick={props.solve}>Solve</Button>
    </div>)
}

export default Options;