import { Container, FormControl, Nav, Navbar, Form, Button, InputGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"



export const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
            <Container>
                <Navbar.Brand href="/">IK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto w-100 d-flex justify-content-between">

                        <Nav.Link href="candidates">Candidates</Nav.Link>
                        <Nav.Link href="about">About Us</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>

                        <Form.Group >
                            <InputGroup>
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />

                                <InputGroup.Text id="inputGroupPrepend">Search</InputGroup.Text>
                            </InputGroup>
                        </Form.Group>

                    </Nav>


                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Header