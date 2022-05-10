import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container, Button } from 'react-bootstrap';
import Detail from './Detail';
import { Routes, Route, NavLink } from 'react-router-dom'
import Register from './Register';
import Popup from './Popup';

export default function Candidates() {

	const dispatch = useDispatch()

	useEffect(() => dispatch(getUsers()), [])

	const [modalShow, setModalShow] = useState(false);
	const [modalShow1, setModalShow1] = useState(false);

	const [search, setSearch] = useState("")

	const state = useSelector(state => state)

	const { candidates, error, loading } = state

	const [user, setUser] = useState({})

	const filterCandidates = candidates.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.phone.toLowerCase().includes(search.toLowerCase()))
console.log(user);
	return (
		<section className="page-section">

			<Container>

				<div className="text-center">
					<h2 className="section-heading text-uppercase">Candidates</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
				<div className="text-end">

					<Button variant="primary" onClick={() => setModalShow(true)}>
						Candidate Register
					</Button>
				</div>

				<FormControl size="lg" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />

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
						{loading
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
										<th>{i + 1}</th>
										<td>{item.name}</td>
										<td>{item.phone}</td>
										<th>
											{/* <NavLink
												to={"detail/" + item._id}
												type="button"
												className={({ isActive }) => isActive ? "btn btn-sm btn-outline-primary" : "btn btn-sm btn-primary"}
											>Detail</NavLink> */}

											<Button size='sm' variant='primary' onClick={() =>{setModalShow1(true); setUser(item)}}>Detail</Button>
										</th>
									</tr>
								))
						}
					</tbody>

				</Table>

				{/* <Routes>
					<Route path="detail/:id" element={<Detail onHide={() => setModalShow(false)} />} />
				</Routes> */}

				<Register show={modalShow} onHide={() => setModalShow(false)} />
				<Popup show={modalShow1} onHide={() => setModalShow1(false)} user={user} />

			</Container>
		</section>
	)
}



