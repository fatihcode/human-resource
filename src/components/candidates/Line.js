import { Button } from 'react-bootstrap'
import React from 'react'
import { getDetail } from '../../store/action'
import { useDispatch } from 'react-redux'





export default function Line(props) {

    const dispatch = useDispatch()

    // console.log(props);

    const { id, name, username, phone } = props.data

    return (
        <tr>
            <th>{props.no}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <th><Button onClick={() => dispatch(getDetail(props.data))} variant="outline-info">Detail</Button></th>
        </tr>
    )
}