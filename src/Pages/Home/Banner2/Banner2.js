import React from 'react';
import './Banner2.css';
import Homepagecard from "../Homepagecard/Homepagecard";

const Banner2 = () => {
    return (
        <>
          <h1 className='text-center pragraph-weight'><i class="fa-solid fa-sliders text-primary fa-1x"></i>  Browse Tours By Category</h1>  
          <div className='container'>
              <div className='row p-4'>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                      <p className='pragraph-weight text-primary'>Outdoor Activites</p>
                      <p className='pragraph-weight text-primary'>Family Friendly Tour</p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                      <p className='pragraph-weight text-primary'>City Tour</p>
                      <p className='pragraph-weight text-primary'>Relaxation Tour</p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                      <p className='pragraph-weight text-primary'>Cultural & Thematic Tour </p>
                      <p className='pragraph-weight text-primary'>Holiday & Seasonal Tours</p>
                  </div>
                  <div className='col-lg-3 col-md-3 col-sm-12'>
                      <p className='pragraph-weight text-primary'>Indulgence & Luxury Tours</p>
                      <p className='pragraph-weight text-primary'>Wild and Adventure Tours</p>
                  </div>
              </div>
          </div>
          <div className="banner2 p-5 mt-5 mb-5">
              <div className='container'>
                  <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12  text-light'>
                      <h1 className='banner-title pragraph-weight'>Discount <span className="text-warning">10-30% Off</span></h1>
                      <p className=' pragraph-weight'>Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                      <button className='btn3 pragraph-weight text-dark p-3'>See Promotion Tour</button>
                      </div>
                      
                     
                  </div>
              </div>
          </div>
          <Homepagecard/>
          
        </>
    );
};

export default Banner2;