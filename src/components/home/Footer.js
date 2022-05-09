import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


export default function Footer() {
	return (
		<Container className="footer py-4">
			<Row className="justify-content-between align-items-center">

				<Col lg={3} className="text-lg-start">Copyright &copy; 2022</Col>

				<Col lg={3} className="my-3 my-lg-0">
					<a className="btn-social" href="#!"><i className="bi bi-twitter"></i></a>
					<a className="btn-social" href="#!"><i className="bi bi-facebook"></i></a>
					<a className="btn-social" href="#!"><i className="bi bi-linkedin"></i></a>

				</Col>

				<Col lg={3} className="text-lg-end">
					<a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
					<a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
				</Col>

			</Row>
		</Container>
	)
}