import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Home = () => {

  const [products, setProducts] = useState([]);

  const [loader, setLoading] = useState(false)


  useEffect(() => {
    document.title = 'Home page';
    setLoading(true)

    const getProductsData = async () => {
      try {

        const getData = await axios.get('https://fakestoreapi.com/products');

        
        setProducts(getData.data);
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    getProductsData()
  }, []);



  const allProducts = products.map((product, index) => {

    const { title, image, id   } = product;
    return(
      <div key={index} className='d-flex flex-column justify-content-between align-items-center h-100 border border-dark m-2 p-3 rounded' >
        <div className='text-center' >
          <img  height={100} src={image} alt="image" />
        </div>
        <hr />
          <h4>Name : {title}</h4>
          <div className='text-center' >
          <Link state={product} to={`/single-product/${id}`} className='btn btn-outline-info'>View more</Link>
          </div>
      </div>
    )
  })





  return (
    <div>
      <div style={loadingIcon} >
        {loader && <Spinner variant='primary' /> }
      </div>
      <div style={styles} >
        {allProducts}
      </div>
    </div>
  )
}


const styles = {
  display : 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px'
}

const loadingIcon = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-55%, 55%)'
}


export default Home;