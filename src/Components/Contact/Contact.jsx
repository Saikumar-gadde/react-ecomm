import React, { useEffect } from 'react';

import './Contact.css'

const Contact = () => {


  useEffect(() => {

    document.title = 'Contact page'

  }, [])

  return (
    <div><h1>Contact</h1></div>
  )
}

export default Contact