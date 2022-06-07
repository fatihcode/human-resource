import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container, Button, Collapse } from 'react-bootstrap';
import Register from './Register';
import Detail from './Detail';

export default function TableCollapse() {

	const [open, setOpen] = useState(false);

	const dispatch = useDispatch()

	useEffect(() => dispatch(getUsers()), [])

	const [registerShow, setRegisterShow] = useState(false);
	const [detailShow, setDetailShow] = useState(false);

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
				<div className="text-end">

					<Button variant="primary" onClick={() => setRegisterShow(true)}>
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
									<>
										<tr key={i} onClick={() => setOpen(!open)}>
											<th>{i + 1}</th>
											<td>{item.name}</td>
											<td>{item.phone}</td>
											<th>

												<Button size='sm' variant='primary' onClick={() => { setDetailShow(true); setUser(item) }}>Detail</Button>
											</th>
										</tr>
										<tr>
											<td colSpan={4}>
												<Collapse in={open}>
													<div id="example-collapse-text">
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
													</div>
												</Collapse>
											</td>
										</tr>
									</>
								))
						}
					</tbody>

				</Table>

				<Register show={registerShow} onHide={() => setRegisterShow(false)} />
				<Detail show={detailShow} onHide={() => setDetailShow(false)} user={user} />

			</Container>
		</section>
	)
}



