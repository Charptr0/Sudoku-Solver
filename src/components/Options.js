import React from "react";
import { Button } from "react-bootstrap";
import styles from "./options.module.css";

function Options(props)
{
    return (<div id={styles.options_div}>
        <Button variant="danger" size="lg">Reset</Button>{' '}
        <Button variant="danger" size="lg" onClick={props.clear}>Clear</Button>{' '}
        <Button size="lg" onClick={props.validate}>Validate</Button>{' '}
        <Button variant="success"  size="lg" onClick={props.solve}>Solve</Button>
    </div>)
}

export default Options;