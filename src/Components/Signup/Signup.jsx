import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Signup.css'

const Signup = () => {

  const [userData, setUserData] = useState({
    name : '',
    password: '',
    email: '',
    number: ''
  });


  const [addUser, setAddUser] = useState(false)


  const [users, setUsers] = useState([])



  useEffect(() => {

    document.title = 'Signup page';

    const getData = async () => {

      try {
        
        const userData = await axios.get('http://localhost:3000/users')

        setUsers(userData.data)

      } catch (error) {
        console.log(error)
      }
    }

    getData();

  }, [addUser]);

  const deleteUser = async (id) => {
    try {

      const API = 'http://localhost:3000/users'

      const deleteUser = await axios.delete(`${API}/${id}`);

      if(deleteUser.data){
        setAddUser(!addUser);
        alert("User deleted successfully....")
      }

      
    } catch (error) {
      console.log(error)
    }


  }

 
  const usersData = users.map((user, index) => {
    return(
      <div className='border m-2 border-dark p-3 rounded' key={index} >
        <h2>Name : {user.name}</h2>
        <h4>Mobile: {user.number}</h4>
        <h4>Email: {user.email}</h4>
        <div>
          <button className='btn btn-outline-dark me-3' >Update</button>
          <button onClick={() => deleteUser(user.id)} className='btn btn-outline-danger' >Delete</button>
        </div>
      </div>
    )
  })



  const inputHandler = (event) => {

    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name] : value
    })



  }


  const submitData = async (e) => {
    e.preventDefault();

    if(!userData.name || !userData.email || !userData.password || !userData.number){
      alert("Please fill the all the details...")
    }


    const userInfo = await axios.post('http://localhost:3000/users', userData)

    console.log(userInfo)
    if(userInfo.data){
      setAddUser(!addUser)

      setUserData({
        name : '',
        password: '',
        email: '',
        number: ''
      })

      alert("User successfully created an account")
    }


  }



  return (
    <div>

        <h1>Signup</h1>
        <form>
          <input value={userData.name} name='name' onChange={inputHandler}  className='form-control w-50 m-2' type="text"  placeholder='Enter Name....' />
          <input value={userData.password} name='password' onChange={inputHandler}  className='form-control w-50 m-2' type="password" placeholder='Enter password...' />
          <input value={userData.email} name='email' onChange={inputHandler}  className='form-control w-50 m-2' type="email"  placeholder='Enter email....' />
          <input value={userData.number} name='number' onChange={inputHandler}  className='form-control w-50 m-2' type="number" placeholder='Enter Number...' />
          <button onClick={submitData} className='btn btn-primary w-50 m-2' >Signup</button>
        </form>


        <div className='d-flex flex-wrap justify-content-center' >
          {usersData}          
      </div>
    </div>
  )
}

export default Signup