import React from 'react'
import { CloseButton } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


export default function Detail() {

  const persons = useSelector(state => state.candidates)

  let param = useParams()

  const user = persons.filter(item => item.id == param.id)

  const { name, username, email, address, phone, website, company } = user[0]

  return (
    <div>
      <div className="card-caption">
        <h1>{name}</h1>
        
        <Link to="/candidates" ><CloseButton></CloseButton></Link>
      </div>

      <table>
        <tbody>
          <tr>
            <td>username</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{address.street}, {address.suite}, {address.zipcode}, {address.city}</td>
          </tr>
          <tr>
            <td>website</td>
            <td>{website}</td>
          </tr>

          <tr>
            <td>company</td>
            <td>{company.name}</td>
          </tr>
          <tr>
            <td>catchPhrase</td>
            <td>{company.catchPhrase}</td>
          </tr>
          <tr>
            <td>bs</td>
            <td>{company.bs}</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}
