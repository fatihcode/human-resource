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

    const [value, setValue] = useState("")

    const { candidates, error, fetching, fetched } = state

    // let filterCandidates = [...candidates]

    //    filterCandidates = candidates.filter(item => item.name.includes(value.toLowerCase()) || item.phone.includes(value.toLowerCase()))


    const filterCandidates = candidates.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.phone.toLowerCase().includes(value.toLowerCase()))

    //   const filterCandidates = candidates.filter(
    //     item => {
    //         return item.name.toLowerCase().indexOf(value.toLowerCase()) !==-1
    //             || item.phone.toLowerCase().indexOf(value.toLowerCase()) !==-1
    //     }
    // )



    return (
        <div>
            <h2>Candidates</h2>
            <hr />
            <Form.Group >
                <InputGroup>
                    <FormControl onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
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
                        : error
                            ? <tr>
                                <th colSpan={4} style={{ "textAlign": "center" }}>
                                    {error}
                                </th>
                            </tr>

                            : filterCandidates.map((item, i) => (
                                <tr key={i}>
                                    <th>{i}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <th>
                                        <NavLink
                                            to={"detail/" + item.id}
                                            type="button"
                                            className={({ isActive }) => isActive ? "btn btn-sm btn-secondary" : "btn btn-sm btn-outline-secondary"}
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