import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ContactForm from './ContactForm'


export default function Contact() {

    const review = useSelector(state => state.review)

    return (
        <section className="page-section comp">
            <Container>

                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <ContactForm />

                {review.map((item, i) => (
                    <div key={i} className="px-lg-5 px-1 py-4">

                        <h3>{item.title}</h3>
                        <h5 className="subheading">{item.email}</h5>
                        <p className="text-muted">{item.message}</p>
                        <hr />
                    </div>
                ))}
            </Container>
        </section>
    )
}