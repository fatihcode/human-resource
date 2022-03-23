import React from 'react'

export default function Contex({ review }) {


    return (
        <div className="px-5 py-3">
            <h3>{review.title}</h3>
            <h5 className="subheading">{review.email}</h5>
            <p className="text-muted">{review.message}</p>
            <hr />
        </div>
    )
}
