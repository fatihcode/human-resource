import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap';


export default function Slide() {

    const slideItem = useSelector(state => state.slideItem)

    return (
        <Container className="">
            <Slider className="slider-wrapper" autoplay={3000}>
                {slideItem.map((item, i) => (
                    <div key={i} className="slider-content" style={{ background: `url('./img/header/${item.image}')` }} >
                        <div className="inner">
                            <h1 className="masthead-subheading">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>

                    </div>
                ))}
            </Slider>
        </Container>
    )
}