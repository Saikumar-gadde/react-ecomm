import React, { useEffect } from 'react';

import './Login.css'

const Login = () => {

  useEffect(() => {

    document.title = 'Login page'

  }, [])


  return (
    <div>
        <h1>Login</h1>
        <form>

          <input className='form-control' type="text"  placeholder='Enter email....' />
          <input className='form-control' type="text" placeholder='Enter password...' />
          <button className='btn btn-primary' >Login</button>
        </form>
    </div>
  )
}

export default Login;