// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import img40 from "../Images/img40.jpg";
import img41 from "../Images/img41.jpg";
import img42 from "../Images/img42.jpg";
import img43 from "../Images/img43.jpg";
import img44 from "../Images/img44.jpg";
import img45 from "../Images/img45.jpg";
import img46 from "../Images/img46.jpg";
import img47 from "../Images/img47.jpg";
import img48 from "../Images/img48.jpg";
import { Pagination } from "swiper";

import SwiperCore, { Autoplay } from "swiper";

export default function Testimonial() {
  SwiperCore.use([Autoplay]);

  return (
    <>
   
      <h1 className="text-center p-2 pragraph-weight p-4">Client Says</h1>
      <div className="swiper-img p-5">
        <div className="container">
          <div className="row p-5 ">
            <Swiper
              navigation={true}
              modules={[Navigation,Pagination]}
              className="mySwiper"
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
             
            >
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img40}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Rebeca John</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img41}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Alena Nauthiya</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img42}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Monileka Sarker</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img43}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Alex Monika</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img44}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Adoniya Kour</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard and all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img45}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Ashnur Cour</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light  justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img46}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Align Virt</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light justyfie-content-center mx-4 container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img47}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Mustafijur Ali</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>
              <SwiperSlide>
                  <div className="container">
                      <div className="row justyfie-content-center">
                      <p className="text-light mx-4 justyfie-content-center container">
                  The work of this developer has tired it's best and the work of
                  Font-End- Develop has been done well.She Try to very hard all work complete right time.
                </p>
                <div className="">
                <img
                  className="rounded-circle d-block mx-auto img-fluid  user-img"
                  src={img48}
                  alt=""
                />
               <p className="text-light text-center pragraph-weight">Soumo</p>
                <p className="text-center text-warning">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </p>
                </div>
                      </div>
                 
                  </div>

              </SwiperSlide>

             
            </Swiper>
          </div>
        </div>
      </div>
      
    </>
  );
}
