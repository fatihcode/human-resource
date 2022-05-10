import { useEffect } from "react"
import { Button, Container, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from './logo.svg'
import { useNavigate } from 'react-router';


export default function Header() {
	const navigate = useNavigate()

	useEffect(() => {

		// Navbar shrink function
		const navbarShrink = function () {
			const navbarCollapsible = document.body.querySelector('#mainNav');

			if (!navbarCollapsible) {
				return;
			}
			if (window.scrollY === 0) {
				navbarCollapsible.classList.remove('navbar-shrink')
			} else {
				navbarCollapsible.classList.add('navbar-shrink')
			}
		};

		// Shrink the navbar 
		navbarShrink();

		// // Shrink the navbar when page is scrolled
		document.addEventListener('scroll', navbarShrink);

		// Collapse responsive navbar when toggler is visible
		const navbarToggler = document.body.querySelector('.navbar-toggler');
		const responsiveNavItems = [].slice.call(
			document.querySelectorAll('#navbarResponsive .nav-link')
		);

		responsiveNavItems.map(function (responsiveNavItem) {
			responsiveNavItem.addEventListener('click', () => {
				if (window.getComputedStyle(navbarToggler).display !== 'none') {
					navbarToggler.click();
				}
			});
		});

	}, [])


	return (
		<Navbar variant="dark" expand="md" sticky="top" id="mainNav">
			<Container >
				<Navbar.Brand href="/human-resource">
					<img src={logo} height="2rem" alt="Human Resource" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="navbarResponsive">
					<ul className="navbar-nav text-uppercase ms-auto align-items-center py-lg-0">

						<li className="nav-item"><NavLink to="/human-resource/candidates" className="nav-link">Candidates</NavLink></li>
						<li className="nav-item"><NavLink to="/human-resource/contact" className="nav-link">Contact</NavLink></li>
						<li className="nav-item"><NavLink to="/human-resource/aboutus" className="nav-link">About</NavLink></li>
						<li className="nav-item">
							<Button onClick={() => navigate("human-resource/signin")} variant="outline-primary"><i className="bi bi-person-fill"></i> Sign In</Button>
						</li>
					</ul>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}