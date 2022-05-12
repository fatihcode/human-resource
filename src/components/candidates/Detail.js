import React, { useState } from 'react'
import { Button, Table, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { delUser } from '../../store/action'
import Register from './Register';

export default function Detail(props) {

   const dispatch = useDispatch()
   const [editShow, setEditShow] = useState(false);

   const { _id, name, email, address, phone, website, company } = props.user

   console.log(props)

   return (
      <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >

         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               {name?.toUpperCase()}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body className="m-4" >
            <Table>
               <tbody>
                  <tr>
                     <th>Email:</th>
                     <td><a href={"mailto:" + email}>{email}</a> </td>
                  </tr>
                  <tr>
                     <th>Phone:</th>
                     <td><a href={"tel:" + phone}>{phone}</a></td>
                  </tr>
                  <tr>
                     <th>Address:</th>
                     <td>{address}</td>
                  </tr>
                  <tr>
                     <th>Web Site:</th>
                     <td> <a href={"http://" + website} target="_blank" >{website}</a> </td>
                  </tr>
                  <tr>
                     <th>Company:</th>
                     <td>{company}</td>
                  </tr>

               </tbody>
            </Table>
         </Modal.Body>

         <Modal.Footer>
            <Button variant="outline-info mx-3" onClick={() => (setEditShow(true))}>Edit</Button>
            <Button variant="outline-danger" onClick={() => dispatch(delUser(_id), props.onHide())} >Delete</Button>
         </Modal.Footer>

         <Register show={editShow} onHide={() => setEditShow(false)} user={props.user} />

      </Modal>
   );
}