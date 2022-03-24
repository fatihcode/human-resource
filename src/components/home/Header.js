import { Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"


export default function Header() {
    return (
        <Navbar variant="dark" expand="lg" sticky="top" id="mainNav">
            <Container>
                <Navbar.Brand href="/">
                    <img src="../static/media/navbar-logo.svg" alt="..." />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">

                        <li className="nav-item"><NavLink to="/candidates" className="nav-link">Candidates</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                        <li className="nav-item"><NavLink to="/aboutus" className="nav-link">About</NavLink></li>

                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}