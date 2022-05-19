import React from 'react';
import img11 from "../Images/img11.jpg";
import img24 from "../Images/img24.jpg";
import img2 from "../Images/img2.jpg";
import "./Homepagecard.css"

const Homepagecard = () => {
    return (
        <>
         <div className="container mt-5 mb-5">
        <div className="row pragraph-weight">
            <h1 className='text-center pragraph-weight p-5'>Our Tours</h1>
          
          <div className="col-lg-4 col-md-6 col-sm-12" >
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img11} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="textses "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight ">America</h3>
                <p className='text-center'>Visit Our World</p>
                <p className='text-center text-warning'><i class="fa-solid fa-star"></i>

                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i> <span className='text-dark'>(6 reviews)</span></p>
                
                <p className="text-center bg-coloe p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img24} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="textses "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center pragraph-weight">South Asia</h3>
                <p className='text-center'>Visit Our World</p>
                <p className='text-center text-warning'><i class="fa-solid fa-star"></i>

                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i> <span className='text-dark'>(6 reviews)</span></p>
                
                <p className="text-center bg-coloe  p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" >
            <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img2} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="textses "> $34,0000</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="container text-center pragraph-weight ">Europe</h3>
                <p className='text-center'>Visit Our World</p>
                <p className='text-center text-warning'><i class="fa-solid fa-star"></i>

                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i> <span className='text-dark'>(6 reviews)</span></p>
                
                <p className="text-center bg-coloe  p-1">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
          </div>
        </div>
      </div>
            
        </>
    );
};

export default Homepagecard;