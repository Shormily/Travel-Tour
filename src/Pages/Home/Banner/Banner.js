import React from 'react';
import { Container,Carousel,Row,Col} from 'react-bootstrap';
import icn1 from "../Images/icn1.png"
import icn2 from "../Images/icn2.png"
import icn3 from "../Images/icn3.png"
import icn4 from "../Images/icn4.png"
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"
import "./Banner.css";

const Banner = () => {
    return (
        <>
        
        <Container fluid className="banner-section p-0">
        <Carousel variant="ligth" fade>
          
        <Carousel.Item className="carousel-three">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                  <div className="animate__animated animate__fadeInLeft ">
                    <h1 className="banner-title text mb-2 text-shadow text">
                     Find Your Perfect
                    </h1>
                    <p className="banner-title text mb-2 text-shadow text">Vaction</p>
                    
                    <button className='btn-1 text-light banner-text'>Learn More</button>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className="carousel-one">
            <Container className="px-md-5">
              <Row>
                <Col sm={12} lg={6}>
                <div className="animate__animated animate__fadeInLeft ">
                    <h1 className="banner-title text mb-2 text-shadow text">
                     Special
                    </h1>
                    <p className="banner-title text mb-2 text-shadow text">7 Days in Switzerland</p>
                    
                    <button className='btn-1 text-light banner-text'>Learn More</button>
                  </div>
                </Col>
                <Col sm={12} lg={6}></Col>
              </Row>
            </Container>
          </Carousel.Item>

         

        </Carousel>
      </Container>
      <div className=' p-4 baner-color text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-12 d-flex mt-3 '>
            <img  src={icn1} alt=""/>
            <p className='mx-1 mt-2 banner-text'>500+ DESTINATIONS</p>

          </div>
          <div className='col-lg-3 col-md-6 col-12 d-flex mt-3'>
          <img  src={icn2} alt=""/>
            <p className='mx-1 mt-2  banner-text'>BEST PRICE GUARANTEES</p>
          </div>
          <div className='col-lg-3 col-md-6 col-12 d-flex mt-3'>
          <img  src={icn3} alt=""/>
            <p className='mx-1 mt-2  banner-text'>GREAT CUSTOMER</p>
          </div>
          <div className='col-lg-3 col-md-6 col-12 d-flex mt-3 mb-3'>
          <img  src={icn4} alt=""/>
            <p className='mx-1 mt-2  banner-text'>SUPER FAST BOOKING</p>
          </div>
        </div>
      </div>
      </div>
      <div className='container'>
        <div className='row p-5'>
          <h1 className='text-center pragraph-weight'><i class="fa-solid fa-location-dot text-primary"></i> Top Destinations</h1>
          <p  className='text-center text-primary pragraph-weight mb-5'>View All Destinations</p>
          <div className='col-lg-3 col-md-3 col-12 '>
            <img className='w-100 imges' src={img1} alt=""/>
          
            
          </div>
          <div className='col-lg-3 col-md-3 col-12'><img className='w-100 ' src={img2} alt=""/>
          
          </div>
          <div className='col-lg-3 col-md-3 col-12'><img className='w-100 ' src={img3} alt=""/></div>
          <div className='col-lg-3 col-md-3 col-12'><img className='w-100 ' src={img4} alt=""/></div>
        </div>
      </div>
        </>
    );
};

export default Banner;