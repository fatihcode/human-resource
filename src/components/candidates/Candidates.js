import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container,Button } from 'react-bootstrap';
import Detail from './Detail';
import { Routes, Route, NavLink } from 'react-router-dom'
import Register from './Register';


export default function Candidates() {

	const dispatch = useDispatch()

	useEffect(() => dispatch(getUsers()), [])

	const state = useSelector(state => state)

	const [modalShow, setModalShow] = useState(false);

	const [value, setValue] = useState("")

	const { candidates, error, loading } = state

	const filterCandidates = candidates.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.phone.toLowerCase().includes(value.toLowerCase()))

	return (
		<section className="page-section">

			<Container>

				<div className="text-center">
					<h2 className="section-heading text-uppercase">Candidates</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
				<div className="text-end">

				<Button variant="primary" onClick={() => setModalShow(true)}>
					Register Form
				</Button>
				</div>

				<FormControl size="lg" onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search" aria-label="Search" />

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
											<NavLink
												to={"detail/" + item._id}
												type="button"
												className={({ isActive }) => isActive ? "btn btn-sm btn-outline-primary" : "btn btn-sm btn-primary"}
											>Detail</NavLink>
										</th>
									</tr>
								))
						}
					</tbody>

				</Table>

				<Routes>
					<Route path="detail/:id" element={<Detail show={modalShow} onHide={() => setModalShow(false)}/>} />
				</Routes>

				<Register show={modalShow} onHide={() => setModalShow(false)}/>


			</Container>
		</section>
	)
}



