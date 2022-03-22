import React from 'react'
import { useSelector } from 'react-redux'
import ContactForm from './ContactForm'
import Contex from './Contex'



export default function Contact() {
    
    const review = useSelector(state => state.review)

    console.log(review);
    return (
        <div>
            <h2>Contact</h2>
            <hr />
            <ContactForm />

            <hr />
            <h1>Contact Contex</h1>
            {review.map(item=><Contex key={item.id} review={item} />)}
            
        </div>
    )
}
