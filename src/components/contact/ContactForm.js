import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { postReview } from '../../store/action';



export default function ContactForm() {

    const dispatch = useDispatch()

    const [email, setEmail] = useState()
    const [title, setTitle] = useState()
    const [message, setMessage] = useState()

    const [validated, setValidated] = useState(false);


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        if (email && title && message) {

            dispatch(postReview({ id: 9, email, title, message }))
        }

    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">

                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={(e) => setTitle(e.target.value)} required type="text" placeholder="Title" />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Reviews</Form.Label>
                    <Form.Control onChange={(e) => setMessage(e.target.value)} rows={3} required as="textarea" placeholder="Reviews" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-3">
                <Form.Check required label="Agree to terms and conditions" feedbackType="invalid" />
            </Form.Group>

            <Button type="submit">Submit form</Button>
        </Form>
    );
}