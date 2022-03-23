import { Carousel, Container } from 'react-bootstrap'
import CarouselItem from './CarouselItem'


// const INITIAL_STATE = [
//    { title: "First slide label", url: "artboard_1.jpg", caption: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
//    { title: "Second slide label", url: "artboard_2.jpg", caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
//    { title: "Third slide label", url: "artboard_3.jpg", caption: "Nulla vitae elit libero, a pharetra augue mollis interdum." },
//    { title: "Fourth slide label", url: "artboard_4.jpg", caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." }
// ]


export default function Home() {

   // const [slider, setSlider] = useState(INITIAL_STATE)

   return (
      <>
         <div id="mastback"></div>
            <header className="masthead">
               <Container>
                  <div className="masthead-subheading">Welcome To Our Studio!</div>
                  <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                  <a className="btn btn-primary btn-xl text-uppercase" href="#team">Tell Me More</a>
               </Container>
            </header>
         

         {/* <Carousel variant="dark" className="mb-4">

             {slider.map((item, i) => <CarouselItem key={i} slide={item} />)} 

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


         </Carousel> */}







         <section className="page-section bg-light" id="team">
            <Container>

               <div className="text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
               </div>

               <div className="row">

                  <div className="col-lg-4">
                     <div className="team-member">
                        <img className="mx-auto rounded-circle" src="./team/1.jpg" alt="..." />
                        <h4>Parveen Anand</h4>
                        <p className="text-muted">Lead Designer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     <div className="team-member">
                        <img className="mx-auto rounded-circle" src="./team/2.jpg" alt="..." />
                        <h4>Diana Petersen</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                     </div>
                  </div>

                  <div className="col-lg-4">
                     <div className="team-member">
                        <img className="mx-auto rounded-circle" src="./team/3.jpg" alt="..." />
                        <h4>Larry Parker</h4>
                        <p className="text-muted">Lead Developer</p>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                     </div>
                  </div>

               </div>

               <div className="row">
                  <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
               </div>

            </Container>
         </section>



         <div className="py-5">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./logos/microsoft.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./logos/google.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./logos/facebook.svg" alt="..." /></a>
                  </div>
                  <div className="col-md-3 col-sm-6 my-3">
                     <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="./logos/ibm.svg" alt="..." /></a>
                  </div>
               </div>
            </div>
         </div>



      </>

   )
}