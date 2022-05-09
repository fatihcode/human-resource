import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/action';


export default function ContactForm() {

	const dispatch = useDispatch()

	const [title, setTitle] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [validated, setValidated] = useState(false);
	const [sub, setSub] = useState(false);

	const handleSubmit = (e) => {
		const form = e.currentTarget;
		e.preventDefault();

		setValidated(true);

		console.log("click");

		// if (form.checkValidity() === false) {

			console.log("validate");

			e.stopPropagation();

			if (email && title && message) {

				dispatch(postReview({ email, title, message }))

				setTitle(""); setEmail(""); setMessage("")
				setValidated(false)
				setSub(true)
				setTimeout(() => setSub(false), 1500);
			}
		// }
	};

	return (
		<Form className="px-lg-5 px-1 mb-5" noValidate validated={validated} onSubmit={handleSubmit}>

			<Row className="mb-3">

				<Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom01">
					<Form.Label>Title</Form.Label>
					<Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" value={title} required />
				</Form.Group>

				<Form.Group className="mb-3" as={Col} md="6" controlId="validationCustom02">
					<Form.Label>Email Adress</Form.Label>
					<Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" value={email} required />
				</Form.Group>

				<Form.Group as={Col} md="12" controlId="validationCustom03">
					<Form.Label>Reviews</Form.Label>
					<Form.Control onChange={(e) => setMessage(e.target.value)} rows={3} as="textarea" placeholder="Reviews" value={message} required />
				</Form.Group>

			</Row>

			{sub
				? <Button variant="success">Form Submitted</Button>
				: <Button type="submit">Submit</Button>
			}

		</Form>
	);
}