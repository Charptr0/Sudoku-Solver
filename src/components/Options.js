import React from "react";
import { Button } from "react-bootstrap";
import styles from "./options.module.css";

function Options()
{
    return (<div id={styles.options_div}>
        <Button variant="danger" size="lg">Reset</Button>{' '}
        <Button size="lg">Regenerate</Button>{' '}
        <Button variant="success"  size="lg">Solve</Button>
    </div>)
}

export default Options;