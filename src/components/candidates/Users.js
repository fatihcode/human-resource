import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container, Button, Accordion } from 'react-bootstrap';
import Register from './Register';
import { delUser } from '../../store/action'

export default function Users(props) {

	const [editShow, setEditShow] = useState(false);

	const dispatch = useDispatch()

	useEffect(() => dispatch(getUsers()), [])

	const [registerShow, setRegisterShow] = useState(false);

	const [search, setSearch] = useState("")

	const state = useSelector(state => state)

	const { candidates, error, loading } = state

	const [user, setUser] = useState({})

	const filterCandidates = candidates.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.phone.toLowerCase().includes(search.toLowerCase()))

	return (
		<section className="page-section">

			<Container>

				<div className="text-center">
					<h2 className="section-heading text-uppercase">Candidates</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>

				<div className="d-flex">

					<FormControl onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
					<Button variant="primary" onClick={() => setRegisterShow(true)}>
						Register
					</Button>
				</div>


				<Accordion defaultActiveKey="0" flush>
				
					{
						loading
							? <div className="text-center"><Spinner animation="border" /></div>
							: error
								? <div className="text-center">{error}</div>
								: filterCandidates.map((item, i) => (
									<Accordion.Item eventKey={i}>

										<Accordion.Header>
											<span>{i + 1}.{ }</span>
											<span>{item.name}</span>
										</Accordion.Header>

										<Accordion.Body>
											<Table>
												<tbody>
													<tr>
														<th>Email:</th>
														<td><a href={"mailto:" + item.email}>{item.email}</a> </td>
													</tr>

													<tr>
														<th>Address:</th>
														<td>{item.address}</td>
													</tr>
													<tr>
														<th>Web Site:</th>
														<td> <a href={"http://" + item.website} target="_blank" >{item.website}</a> </td>
													</tr>
													<tr>
														<th>Company:</th>
														<td>{item.company}</td>
													</tr>

												</tbody>
											</Table>
											<div className="text-end">
												<Button size='sm' variant="outline-info mx-3" onClick={() => (setUser(item), setEditShow(true))}>Edit</Button>
												<Button size='sm' variant="outline-danger" onClick={() => dispatch(delUser(item._id), props.onHide())} >Delete</Button>
											</div>
										</Accordion.Body>
									</Accordion.Item>

								))}
				</Accordion>


				<Register show={registerShow} onHide={() => setRegisterShow(false)} />

				<Register show={editShow} onHide={() => setEditShow(false)} user={user} />

			</Container>
		</section>
	)
}



