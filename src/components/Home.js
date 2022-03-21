import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselItem from './CarouselItem'

import { useDispatch } from 'react-redux'

// const INITIAL_STATE = [
//    { title: "First slide label", url: "artboard_1.jpg", caption: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
//    { title: "Second slide label", url: "artboard_2.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//    { title: "Third slide label", url: "artboard_3.jpg", caption: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
//    { title: "Fourth slide label", url: "artboard_4.jpg", caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." }
// ]


export default function Home() {

   // const [slider, setSlider] = useState(INITIAL_STATE)


   return (

      <Carousel variant="dark" className="mb-4">

         {/* {slider.map((item, i) => <CarouselItem key={i} slide={item} />)} */}

         <Carousel.Item>
            <img className="d-block w-100" src="img/artboard_1.jpg" alt="First slide" />
            <Carousel.Caption>
               <h5>First slide label</h5>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src="img/artboard_2.jpg" alt="Second slide" />
            <Carousel.Caption>
               <h5>Second slide label</h5>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src="img/artboard_3.jpg" alt="Third slide" />
            <Carousel.Caption>
               <h5>Third slide label</h5>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
         </Carousel.Item>

         <Carousel.Item>
            <img className="d-block w-100" src="img/artboard_4.jpg" alt="Third slide" />
            <Carousel.Caption>
               <h5>Third slide label</h5>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
         </Carousel.Item>


      </Carousel>

   )
}