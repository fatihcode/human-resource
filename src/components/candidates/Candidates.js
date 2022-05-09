import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/action'
import { FormControl, Table, Spinner, Container } from 'react-bootstrap';
import Detail from './Detail';
import { Routes, Route, NavLink } from 'react-router-dom'
import Register from './Register';


export default function Candidates() {

	const dispatch = useDispatch()
	const [add, setAdd] = useState("")

	useEffect(() => dispatch(getData()), [add])

	const state = useSelector(state => state)

	const [value, setValue] = useState("")
	


	const { candidates, error, fetching } = state

	const filterCandidates = candidates.filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.phone.toLowerCase().includes(value.toLowerCase()))

	return (
		<section className="page-section">

			<Container>

				<div className="text-center">
					<h2 className="section-heading text-uppercase">Candidates</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>

				<FormControl onChange={(e) => setValue(e.target.value)} type="search" placeholder="Search" aria-label="Search" />

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
						{ filterCandidates.map((item, i) => (
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
					<Route path="detail/:id" element={<Detail  setAdd={setAdd}/>} />
				</Routes>

				<Register setAdd={setAdd}/>

			</Container>
		</section>
	)
}