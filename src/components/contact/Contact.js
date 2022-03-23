import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ContactForm from './ContactForm'
import Contex from './Contex'



export default function Contact() {

    const review = useSelector(state => state.review)

    console.log(review);
    return (
        <section className="page-section">
            <Container>
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>

                <ContactForm />

                <hr />
 
                {review.reverse().map((item, i) => <Contex key={i} review={item} />)}
            </Container>
        </section>
    )
}
