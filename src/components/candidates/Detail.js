import React from 'react'

export default function Detail(props) {

  console.log(props);

  const { name, username, email, address, phone, website, company } = props.detail

  return (
    <div>
      <h1>{name}</h1>

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
          <td>bs</td>
          <td>{company.bs}</td>

        </tbody>
      </table>


    </div>
  )
}
