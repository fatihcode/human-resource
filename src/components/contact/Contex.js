import React from 'react'

export default function Contex({ review }) {


    return (
        <div>
            <h3>{review.title}</h3>
            <h5 className="text-muted">{review.email}</h5>
            <p>{review.message}</p>
            <hr />
        </div>
    )
}
