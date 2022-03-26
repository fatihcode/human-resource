import React from 'react'
import { useSelector } from 'react-redux'


export default function About() {

	const aboutItem = useSelector(state => state.aboutItem)

	return (

		<section className="page-section" id="about">
			<div className="container">

				<div className="text-center">
					<h2 className="section-heading text-uppercase">About</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>

				<ul className="timeline">

					{aboutItem.map((item, i) => (
						<li key={i} className={i % 2 === 0 ? null : "timeline-inverted"}>
							<div className="timeline-image">
								<img className="rounded-circle img-fluid" src={"./static/media/about/" + item.image} alt="..." /></div>
							<div className="timeline-panel">
								<div className="timeline-heading">
									<h4 className="subheading">{item.title}</h4>
								</div>
								<div className="timeline-body">
									<p className="text-muted">{item.description}</p></div>
							</div>
						</li>
					))}

					<li className="timeline-inverted">
						<div className="timeline-image">
							<h4>Be Part<br />Of Our<br />Story!</h4>
						</div>
					</li>

				</ul>
			</div>
		</section>
	)
}