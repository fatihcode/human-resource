import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, updateUser } from '../../store/action'


export default function Register(props) {

   const sending = useSelector(state => state.sending)
   const dispatch = useDispatch()
   const [validated, setValidated] = useState(false);
   const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '', website: '', company: '' })

   useEffect(() => { props.user && setFormData(props.user) }, [props])

   const handleSubmit = (e) => {

      const form = e.currentTarget;
      e.preventDefault();
      setValidated(true);
      if (form.checkValidity()) {
         props.user ? dispatch(updateUser(formData)) : dispatch(postUser(formData))
         setValidated(false)
         setFormData({ name: '', phone: '', email: '', address: '', website: '', company: '' })
      }
   };
   
   if (sending) {
      props.onHide()
   }
   // console.log(props);
   
   return (
      <Modal {...props} size="md" backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {props.user ? "Update User" : "Register From"}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-4">

            <Form noValidate validated={validated} onSubmit={handleSubmit}>

               <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="" value={formData.name} required autoFocus/>
               </Form.Group>

               <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="tel" placeholder="" value={formData.phone} required />
               </Form.Group>

               <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" placeholder="" value={formData.email} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="website">
                  <Form.Label>Website</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, website: e.target.value })} type="string" placeholder="" value={formData.website} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, company: e.target.value })} type="text" placeholder="" value={formData.company} />
               </Form.Group>

               <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control onChange={(e) => setFormData({ ...formData, address: e.target.value })} type="text" placeholder="" value={formData.address} />
               </Form.Group>

               {sending
                  ? <Button variant="success" disabled>Sending</Button>
                  : <Button type="submit">Submit</Button>
               }

            </Form>

         </Modal.Body>

      </Modal>
   )
}