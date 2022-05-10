import React, { useState } from 'react'
import { Spinner, Container, Button, Col, Form, Row } from 'react-bootstrap';



export default function Signin() {

   const [form, setForm] = useState({ username: '', password: '', })

   const handleSubmit = (e) => {
      e.preventDefault();

      if (form.username && form.password) {
         setForm({ username: '', password: '', })
      }
   }

   return (
      <section className="page-section">

         <Container>

            <div className="text-center">
               <h2 className="section-heading text-uppercase">Sign In</h2>
               <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>

            <Form className="px-lg-5 px-1 mb-5" noValidate onSubmit={handleSubmit}>

               <Row className="mb-3 justify-content-center">
                  <Col xs={12} md={6}>

                     <Form.Group className="mb-3" controlId="email">

                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, username: e.target.value })} type="text" placeholder="" value={form.username} required />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" placeholder="" value={form.password} required />
                     </Form.Group>

                     <Button type="submit">Submit</Button>

                  </Col>
               </Row>

            </Form>

         </Container>
      </section>
   )
}
