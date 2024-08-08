import React from 'react';

import { useLocation } from 'react-router-dom';

const ProductInfo = () => {


    const { state } = useLocation();


    const { title, price, category, description, image,rating  } = state


  return (
    <div>
        <div className='shadow p-5 m-5' >
            <div className='text-center' >
            <img height={250} src={image} alt="image" />
            </div>
            <hr />
            <div>
                <h1 className='text-center' >Name : {title} </h1>
                <hr />
                <div className='d-flex justify-content-evenly' >
                    <h5>Price : &#8377;{price}</h5>
                    <h5>Category: {category}</h5>
                    <h5>Rating : {rating.rate}</h5>
                </div>
                <hr />
            </div>

            <p>About : {description}</p>

            <button className='btn btn-outline-primary' >Buynow</button>
            <button className='btn btn-outline-danger ms-2' >Add to cart</button>
        </div>
        
    </div>
  )
}

export default ProductInfo;