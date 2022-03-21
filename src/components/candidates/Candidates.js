import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Line from './Line'
import { getData } from '../../store/action'
import { Form, FormControl, InputGroup, Table } from 'react-bootstrap';
import Detail from './Detail';


export default function Candidates() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(getData()), [])

    const state = useSelector(state => state)

    const { candidates, detail, error, fetching, fetched } = state

    // console.log(candidates);

    return (
        <div>
            <h2>Candidates</h2>
            <hr />

            <Form.Group >
                <InputGroup>
                    <FormControl type="search" placeholder="Search" aria-label="Search" />
                    <InputGroup.Text id="inputGroupPrepend">Search</InputGroup.Text>
                </InputGroup>
            </Form.Group>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Phone Number</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>

                    {candidates.map((item, i) => <Line key={item.id} no={i} data={item} />)}

                </tbody>
            </Table>

            <hr />

            {/* {detail.length === 0 ? null : <Detail detail={detail} />} */}


        </div>
    )
}