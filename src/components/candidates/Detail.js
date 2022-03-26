import React from 'react'
import { CloseButton, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function Detail() {

  const persons = useSelector(state => state.candidates)

  let param = useParams()

  const user = persons.filter(item => item.id == param.id).pop()

  const { name, username, email, address, phone, website, company } = user

  return (
    <div className="portfolio-modal mt-5">

      <div className="card-caption">
        <h1 className="text-uppercase">{name}</h1>
        <div className="close"> <Link to="/human-resource/candidates"><CloseButton /></Link></div>
      </div>

      <Table>
        <tbody>
          <tr>
            <th className="th-row">User Name:</th>
            <td>{username}</td>
          </tr>
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
            <td>{address.street}, {address.suite}, {address.zipcode}, {address.city}</td>
          </tr>
          <tr>
            <th>Web Site:</th>
            <td> <a href={"http://" + website} target="_blank" >{website}</a> </td>
          </tr>
          <tr>
            <th>Company:</th>
            <td>{company.name}</td>
          </tr>
        </tbody>
      </Table>

    </div>
  )
}
