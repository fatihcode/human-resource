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
    <div class="portfolio-modal mt-5">

          <div className="card-caption">
            <h1 className="text-uppercase">{name}</h1>
           <div className="close"> <Link to="/candidates"><CloseButton /></Link></div>
          </div>

          <Table>
            <tbody>
              <tr>
                <th className="th-row">User Name:</th>
                <td>{username}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Phone:</th>
                <td>{phone}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{address.street}, {address.suite}, {address.zipcode}, {address.city}</td>
              </tr>
              <tr>
                <th>Web Site:</th>
                <td>{website}</td>
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
