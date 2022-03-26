import { Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from './logo.svg'


export default function Header() {
	return (
		<Navbar variant="dark" expand="md" sticky="top" id="mainNav">
			<Container >
				<Navbar.Brand href="/human-resource">
					<img src={logo} alt="Human Resource" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="navbarResponsive">
					<ul className="navbar-nav text-uppercase ms-auto py-lg-0">

						<li className="nav-item"><NavLink to="/human-resource/candidates" className="nav-link">Candidates</NavLink></li>
						<li className="nav-item"><NavLink to="/human-resource/contact" className="nav-link">Contact</NavLink></li>
						<li className="nav-item"><NavLink to="/human-resource/aboutus" className="nav-link">About</NavLink></li>

					</ul>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}