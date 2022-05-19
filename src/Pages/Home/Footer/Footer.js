import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <>
                    <div className=' bg-color text-light p-5  footercol '>
        <div className='container '>
               <div className='row'>
                   <div className='col-lg-3 col-md-3 col-sm-12 g-2 '>
                      <h3 className='mb-4 banner-text travel-color'>Travel Tour</h3>
                      <p className='pragraph-weight'>12 Main tPt. London</p>
                      <p className='pragraph-weight'>+44 3656 4567</p>
                      <i class="fa-brands fa-facebook-f  shadow icn "></i>  <i class="fa-brands fa-twitter icn shadow "></i> <i class="fa-brands fa-linkedin-in icn shadow "></i> <i class="fa-solid fa-envelope icn shadow "></i>
                   </div>
                   <div className='col-lg-3 col-md-3 col-sm-12  '>
                       <h3 className='mb-4 banner-text'>About Us </h3>
                       <p className='pragraph-weight' as={NavLink} to="/home"><i class="fa-solid fa-angle-right"></i> Home</p>
                       <p className='pragraph-weight'><i class="fa-solid fa-angle-right"></i> About US</p>
                       <p className='pragraph-weight'><i class="fa-solid fa-angle-right"></i> Protfullio</p>
                       <p className='pragraph-weight'><i class="fa-solid fa-angle-right"></i> Contact Me</p>
                      
                   </div>
                   <div className='col-lg-3 col-md-3 col-sm-12 '>
                       <h3 className='mb-4 mt-1 banner-text'>Support</h3>
                      <p className='pragraph-weight'>Our Story</p>
                      <p className='pragraph-weight'>Travel Blog & Tips</p>
                      <p className='pragraph-weight'>Working With US</p>
                      <p className='pragraph-weight'>Be our partner</p>
                      
                   
                  
                   </div>
                   <div className='col-lg-3 col-md-3 col-sm-12 '>
                       <h3 className='mb-4 mt-1 banner-text '>Pay Safely With Us</h3>
                       <p className='pragraph-weight'>The payment is encrypted and transmitted securely with and SSL protocol</p>
                      
                   
                  
                   </div>
                   <hr className='mt-4'/>
                   <p className='text-center pragraph-weight'>© 2022 Travel Tour by GoodLayers.All Rights Reserved | Privacy Polici | <span className=' travel-color'>Terms and Conditions</span></p>
               </div>
               </div> 
        </div>
        </>
    );
};

export default Footer;