import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";

function BootstrapNavbar()
{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#game_board">Sudoku Solver</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#deets">About</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">GitHub</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    ) 
}

export default BootstrapNavbar;