import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/action'
import { Form, FormControl, InputGroup, Table, Button, Spinner } from 'react-bootstrap';
import Detail from './Detail';
import { Routes, Route, NavLink } from 'react-router-dom'

export default function Candidates() {

    const dispatch = useDispatch()

    useEffect(() => dispatch(getData()), [])

    const state = useSelector(state => state)

    const { candidates, detail, error, fetching, fetched } = state


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
                    {fetching
                        ? <tr>
                            <td colSpan={4} style={{ "textAlign": "center" }}>
                                <Spinner animation="border" />
                            </td>
                        </tr>
                        : candidates.map((item, i) => (
                            <tr>
                                <th>{i}</th>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <th>
                                    <NavLink
                                        to={"detail/" + item.id}
                                        type="button"
                                        className={({ isActive }) => isActive ? "btn btn-secondary" : "btn btn-outline-secondary"}
                                    >Detail</NavLink>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <hr />

            <Routes>
                <Route path="detail/:id" element={<Detail />} />
            </Routes>

        </div>
    )
}