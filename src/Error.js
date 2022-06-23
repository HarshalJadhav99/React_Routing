import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
const Error = () => {
  const navigate =useNavigate()
  const goHome=()=>{
    navigate('/')
  }
  return (
    <>
    <h1>404 Error page</h1>
    <NavLink exact to="/">Go to home page.</NavLink>
    {/* <button onClick={goHome}>Go to home page.</button> */}

    </>
  )
}

export default Error