import React from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-img ">
        <h1 className="text-center mt-5 text-light  text2 text col-lg-6">
          About Us
        </h1>
      </div>
      <div className="about-color p-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h1 className="text p-5">
                We are the best architect firm & Building Consultant
              </h1>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-5 pragraph-weight">
              <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam quis risus eget urna mollis ornare vel eu leo. Cras
                mattis consectetur purus sit amet fermentum. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit avmet risus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div className="row pragraph-weight  ">
              <div className="col-lg-4 col-md-4 col-sm-12 p-5">
                  <h3 className="pragraph-weight">
                  We pride ourselves on innovative.
                  </h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <p className="text-colors pragraph-weight">LEARN MORE  <i class="fa-solid fa-arrow-right-long"></i></p>
              
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-5">
                  <h3 className="pragraph-weight">
                  We pride ourselves on innovative.
                  </h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <p className="text-colors pragraph-weight">LEARN MORE  <i class="fa-solid fa-arrow-right-long"></i></p>
              
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-5">
                  <h3 className="pragraph-weight">
                  We pride ourselves on innovative.
                  </h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <p className="text-colors pragraph-weight">LEARN MORE  <i class="fa-solid fa-arrow-right-long"></i></p>
              
              </div>
          </div>
      </div>
      <div className="imgu">
          <h1 className="text2  text  mt-5 container text-light">Award Winnings</h1>
      </div>
      
      <div className="container">
          <div className="row p-5 pragraph-weight">
              <div className="col-lg-4 col-md-4 col-sm-12">
                  <h4 className="pragraph-weight">Innovative Design Award 2017</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Clever Structure Award 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Best Engineering Design 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Environment Heart Award 2016</h4>
                  <p>First Runner Up</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="pragraph-weight">Innovative Design Award 2017</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Clever Structure Award 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Best Engineering Design 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Environment Heart Award 2016</h4>
                  <p>First Runner Up</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
              <h4 className="pragraph-weight">Innovative Design Award 2017</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Clever Structure Award 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Best Engineering Design 2016</h4>
                  <p>First Runner Up</p>
                  <h4 className="pragraph-weight">Environment Heart Award 2016</h4>
                  <p>First Runner Up</p>
              </div>
          </div>
      </div>
      <Testimonial/>
    </>
  );
};

export default About;
