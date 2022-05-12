import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/action'
import { FormControl, Table, Spinner, Container, Button, Pagination } from 'react-bootstrap';
import Register from './Register';
import Detail from './Detail';

export default function Candidates() {

	const dispatch = useDispatch()

	useEffect(() => dispatch(getUsers()), [])

	const [registerShow, setRegisterShow] = useState(false);
	const [detailShow, setDetailShow] = useState(false);
	const [search, setSearch] = useState("")
	const [user, setUser] = useState({})
	const state = useSelector(state => state)
	const { candidates, error, loading } = state

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
					<Button variant="primary" onClick={() => setRegisterShow(true)}>Register</Button>
				</div>

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
											<Button size='sm' variant='primary' onClick={() => { setDetailShow(true); setUser(item) }}>Detail</Button>
										</th>
									</tr>
								))
						}
					</tbody>

				</Table>

				<Pagination className='justify-content-center'>
					<Pagination.First />
					<Pagination.Prev />

					<Pagination.Item active>{1}</Pagination.Item>
					{/* <Pagination.Ellipsis /> */}

					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>

					{/* <Pagination.Ellipsis /> */}

					<Pagination.Next />
					<Pagination.Last />
				</Pagination>

				<Register show={registerShow} onHide={() => setRegisterShow(false)} />
				<Detail show={detailShow} onHide={() => setDetailShow(false)} user={user} />

			</Container>
		</section>
	)
}