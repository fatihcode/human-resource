import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css';
import { useSelector } from 'react-redux'


export default function Slide() {
    
    const slideItem = useSelector(state => state.slideItem)

    return (
        <Slider className="slider-wrapper" autoplay={3000}>
            {slideItem.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1 className="masthead-subheading">{item.title}</h1>
                        <p>{item.description}</p>
                    </div>

                </div>
            ))}
        </Slider>

    )
}