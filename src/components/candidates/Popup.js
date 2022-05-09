import React from 'react'
import { Button, CloseButton, Table, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { delUser } from '../../store/action'

export default function Popup({ props, id="6253642403d48556eea63174" }) {

   const dispatch = useDispatch()
   const navigate = useNavigate();
   const persons = useSelector(state => state.candidates)

   const user = persons.find(item => item._id === id)

   const { _id, name, email, address, phone, website, company } = user

   return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {name}
            </Modal.Title>
         </Modal.Header>

         <Modal.Body>
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
                  <tr>
                     <th colSpan={2} >

                        <Button variant="outline-info mx-3" >Edit</Button>
                        <Button variant="outline-danger" onClick={() => dispatch(delUser(_id), navigate('/human-resource/candidates'))} >Delete</Button>

                     </th>
                  </tr>
               </tbody>
            </Table>
         </Modal.Body>

      </Modal>
   );
}

