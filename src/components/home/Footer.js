import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


export default function Footer() {
	return (
		<Container className="footer py-4">
			<Row className="justify-content-between align-items-center">

				<Col lg={3} className="text-lg-start">Copyright &copy; 2022</Col>

				<Col lg={3} className="my-3 my-lg-0">
					<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
					<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
					<a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
				</Col>

				<Col lg={3} className="text-lg-end">
					<a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
					<a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
				</Col>

			</Row>
		</Container>
	)
}