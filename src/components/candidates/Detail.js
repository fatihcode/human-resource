import React from 'react'
import { Button, CloseButton, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { API } from '../../store/action';

export default function Detail() {

  const persons = useSelector(state => state.candidates)

  let param = useParams()

  const user = persons.find(item => item._id === param.id)

  const {_id, name, email, address, phone, website, company } = user

  const handleDelete = (id) => {
    API.delete(`/${id}`)
    
 }


  return (
    <div className="portfolio-modal mt-5">

      <div className="card-caption">
        <h1 className="text-uppercase">{name}</h1>
        <div className="close"> <Link to="/human-resource/candidates"><CloseButton /></Link></div>
      </div>

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
              <Button variant="outline-danger" onClick={handleDelete(_id)} >Delete</Button>

            </th>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}
