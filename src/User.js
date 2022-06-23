import React from 'react'
import {useParams} from "react-router-dom"
const User = () => {
    const {fname,lname} = useParams();
  return (
    <>
    <h1>User {fname} {lname}</h1></>
  )
}

export default User