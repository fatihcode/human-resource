import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'


export default function Team() {

	const team = useSelector(state => state.team)

	return (
		<section className="page-section bg-light" id="team">
			<Container>

				<div className="text-center">
					<h2 className="section-heading text-uppercase">Our Amazing Team</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>

				<div className="row">

					{team.map((item, i) => (
						<div key={i} className="col-lg-4">
							<div className="team-member">
								<img className="mx-auto rounded-circle" src={"./human-resource/static/media/team/" + item.image} alt={item.name} />
								<h4>{item.name}</h4>
								<p className="text-muted">{item.work}</p>
								<a className="btn btn-dark btn-social mx-2" href="#"><i className="fab fa-twitter"></i></a>
								<a className="btn btn-dark btn-social mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
								<a className="btn btn-dark btn-social mx-2" href="#"><i className="fab fa-linkedin-in"></i></a>
							</div>
						</div>
					))}

				</div>

				<div className="row">
					<div className="col-lg-8 mx-auto text-center">
						<p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
				</div>

			</Container>
		</section>
	)
}