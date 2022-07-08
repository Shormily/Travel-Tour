import React , { useState ,useEffect}  from 'react';
import Product from '../Product/Product';
import "./Ticket.css";
const Ticket = () => {
    const [products,setProducts] = useState([])
    useEffect(() =>{
        fetch("./products.JSON")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
    return (
        <>
      <div className='product'><h1 className='text-danger mt-5 text-center pragraph-weight text-light'><span className='text-colors '> TRAVEL TOUR</span> / Home</h1></div>
      <h1 className='p-5 text-center colors pragraph-weight  'data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Our Tour Tickets</h1>
         <div className='card-background p-5  '>
        
           <div className='container '>
           <div className="row ">
               
               {products.map((product) => (
              <Product Product product={product} key={product.key}></Product>
            
          ))}
              
          
        </div>
           </div>
        </div>
        </>
        
    );
};

export default Ticket;