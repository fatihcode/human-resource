import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


export default function ContactForm() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <Row className="mb-3">

                <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control required type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Reviews</Form.Label>
                    <Form.Control rows={3} required as="textarea" placeholder="Reviews" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Agree to terms and conditions"
                    // feedback="You must agree before submitting."
                    feedbackType="invalid"
                />
            </Form.Group>

            <Button type="submit">Submit form</Button>
        </Form>
    );
}