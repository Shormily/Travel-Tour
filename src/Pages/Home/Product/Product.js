import React from 'react';
import "./Product.css";

const Product = (props) => {
    console.log(props.product);
    // const {img,price} = props.product
    const { img,price,name} = props.product || {};
    return (
        <>
       

         <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
     
         <div className="card-container rounded-2">
              <div className="swiper">
                <div className="image-container ">
                  <img src={img} alt="" />
                  <div className="overlay">
                    <div >
                      <p className="texts pragraph-weight "> ${price}</p>
                     </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-center mt-2 pragraph-weight">{name}</h3>
                <p className="text-center p-3 pragraph-weight">Contact us for details of some of the places to visit on the Travel Tour </p>
                <p className='text-center text-warning'><i class="fa-solid fa-star"></i>

                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i> <span className='text-dark pragraph-weight'>(6 reviews)</span></p>
                
                
                <p className="text-center bg-coloe p-1 pragraph-weight">Buy Now <i className="fa-solid fa-arrow-right-long"></i></p>
              </div>
            </div>
      </div>
        </>
    );
};

export default Product;