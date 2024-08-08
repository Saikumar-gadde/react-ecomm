import React from 'react';

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='d-flex justify-content-around bg-warning align-items-center' >
        <div>
            <h1><Link to='/'>Flipkart</Link></h1>
        </div>
        <div>
            <ul className='d-flex' >
                <li className='list-unstyled ms-3' ><Link to='/login' className='text-decoration-none' >Login</Link></li>
                <li className='list-unstyled ms-3' ><Link to='/signup' className='text-decoration-none' >Signup</Link></li>
                <li className='list-unstyled ms-3' ><Link to='/contact' className='text-decoration-none' >Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;