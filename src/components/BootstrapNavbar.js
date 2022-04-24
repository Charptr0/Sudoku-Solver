import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";

function BootstrapNavbar()
{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand>Sudoku Solver</Navbar.Brand>
                <Nav>
                    <Nav.Link href="https://github.com/Charptr0/Sudoku-Solver" target={"_blank"}>GitHub</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    ) 
}

export default BootstrapNavbar;