import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container, Button, Collapse, Dropdown, DropdownButton } from 'react-bootstrap';
import Register from './Register';
import Detail from './Detail';
import "bootstrap/js/src/collapse.js";

export default function Col() {

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
					{/* <Dropdown>
						<Dropdown.Toggle variant="success" id="dropdown-basic">
							Dropdown Button
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
							<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
							<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<DropdownButton id="dropdown-basic-button" title="Sign In">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton> */}
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
									<React.Fragment key={i}>
										<tr data-toggle="collapse"
											data-target={".multi-collapse" + i}
											aria-controls={"multiCollapseExample" + i} key={i}>
											<th>{i + 1}</th>
											<td>{item.name}</td>
											<td>{item.phone}</td>
											<th>

												<Button size='sm' variant='primary' onClick={() => { setDetailShow(true); setUser(item) }}>Detail</Button>
											</th>
										</tr>
										<tr className={"collapse multi-collapse" + i} id={"multiCollapseExample" + i}>
											<td colSpan={4}>

												Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
												terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
												labore wes anderson cred nesciunt sapiente ea proident.

											</td>
										</tr>
									</React.Fragment>
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



