import React from 'react'
import { brand } from '../../config/data'

export default function Brand() {
    return (

        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">

                    {brand.map((item, i) => (
                        <div key={i} className="col-md-3 col-sm-6 my-3">
                            <a href="#!">
                                <img
                                    className="img-fluid img-brand d-block mx-auto"
                                    src={item.image}
                                    alt={item.name}
                                />
                            </a>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
