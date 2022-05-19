import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-img"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <i class="fa-solid fa-phone fa-3x mt-5 mb-4"></i>
            <h3 className="pragraph-weight">Phone</h3>
            <p className="pragraph-weight">
              A wonderful serenity has taken possession of my entire soul, like
              these.
            </p>
            <p className="pragraph-weight text-primary">+1-2345-2345</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <i class="fa-solid fa-envelope fa-3x mt-5 mb-4"></i>
            <h3 className="pragraph-weight">Email</h3>
            <p className="pragraph-weight">
              A wonderful serenity has taken possession of my entire soul, like
              these.
            </p>
            <p className="pragraph-weight text-primary">
              Contact@goodlayers.com
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <i class="fa-solid fa-location-arrow fa-3x mt-5 mb-4"></i>
            <h3 className="pragraph-weight">Location</h3>
            <p className="pragraph-weight">
              4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342
            </p>
            <p className="pragraph-weight text-primary">View on Google map</p>
          </div>
        </div>

      
      </div>
      <div className="contact-color mb-5 mt-5 p-5">
          <div className="container  ">
            <div className="row justify-content-center ">
              <h1 className="text-center pragraph-weight mt-4 ">
                Leave us your info
              </h1>
              <p className="text-center pragraph-weight">
                and we will get back to you.
              </p>
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex ">
                <input
                  className="mt-2 mb-3 p-3 mx-2  w-75 shadow container"
                  placeholder="Name*"
                  type="text"
                />

                <input
                  className="mt-2 mb-3 p-3  w-75 shadow"
                  placeholder="E-mail*"
                  type="text"
                />
              </div>
            </div>
            <div className="container col-lg-6">
              <input
                className=" mb-3 p-3  w-100 shadow"
                placeholder="E-mail*"
                type="text"
              />
              <textarea
                className=" p-4 col-lg-6 col-md-6 col-12 w-100 shadow"
                placeholder="Message"
                type="text"
              />
              <button className="w-100 btn-2 mt-2 p-2 mb-5 text-dark pragraph-weight">
                Submit Now
              </button>
            </div>
          </div>
        </div>
        <Container fluid className="footer-map p-0 map-container ">
        <div className="map-container d-none d-md-block col-lg-12 col-md-12 col-12 pb-0 mt-5 ">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.544153666492!2d-74.01101428500574!3d40.70603607933263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b5ae01!2sWall%20St%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649877573625!5m2!1sen!2sbd"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="mt-5 mb-5"
          ></iframe>
        </div>
      </Container>
      <div className=" container">
          <div className="row justify-content-center p-5 mb-5 d-flex">
          <i class="fa-brands fa-facebook-f fa-2x   icns "></i>  <i class="fa-brands fa-twitter icns fa-2x  "></i> <i class="fa-brands fa-linkedin-in icns fa-2x  "></i> <i class="fa-solid fa-envelope icns fa-2x  "></i><i class="fa-brands fa-google-plus-g icns fa-2x"></i>
          </div>
     
      </div>
    </>
  );
};

export default Contact;
