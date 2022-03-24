import React from 'react'
import { Carousel } from 'react-bootstrap'


export default function CarouselItem(props) {

    const { title, caption, url } = props.slide

    return (
        <Carousel.Item>

            <img className="d-block w-100" src={"./static/media/" + url} alt={title} />

            <Carousel.Caption>
                <h5>{title}</h5>
                <p>{caption}</p>
            </Carousel.Caption>

        </Carousel.Item>
    )
}
