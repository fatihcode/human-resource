import React, { useState } from 'react'
import { Container, Button, Col, Form, Row } from 'react-bootstrap';

import { API } from '../../store/action';

export default function Register() {

   const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      website: '',
      company: ''
   })

   console.log(form)


   const [validated, setValidated] = useState(false);
   const [sub, setSub] = useState(false);

   const handleSubmit = (e) => {
      const formCheck = e.currentTarget;

      setValidated(true);

      e.preventDefault();
      console.log("içerde");

      if (formCheck.checkValidity() === true) {
         console.log("validate");

         if (form.name && form.phone) {

            API.post('/', form)
        
            setValidated(false)
            setSub(true)
            setTimeout(() => setSub(false), 1500);
         }
      }
   };


   return (
      <section className="page-section">

         <Container>

            <div className="text-center">
               <h2 className="section-heading text-uppercase">Register Form</h2>
               <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>

            <Form className="px-lg-5 px-1 mb-5" noValidate validated={validated} onSubmit={handleSubmit}>

               <Row className="mb-3 justify-content-center">
                  <Col xs={12} md={6}>

                     <Form.Group className="mb-3" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" placeholder="" value={form.name} required />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="validationCustom02">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="" value={form.email} required />
                     </Form.Group>

                     <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, phone: e.target.value })} type="tel" placeholder="" value={form.phone} />
                     </Form.Group>

                     <Form.Group className="mb-3">
                        <Form.Label>Website</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, website: e.target.value })} type="string" placeholder="" value={form.website} />
                     </Form.Group>

                     <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, company: e.target.value })} type="text" placeholder="" value={form.company} />
                     </Form.Group>

                     <Form.Group className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={(e) => setForm({ ...form, address: e.target.value })} type="text" placeholder="" value={form.address} />
                     </Form.Group>


                     {sub
                        ? <Button variant="success">Form Submitted</Button>
                        : <Button type="submit">Submit</Button>
                     }
                  </Col>

               </Row>
            </Form>


         </Container>
      </section>
   )
}
