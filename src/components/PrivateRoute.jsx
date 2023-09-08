import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


//this component is only there so that the url doesnt change and remains redirected to login page if not authenticated
const PrivateRoute = ({component}) => {

    const userData = useSelector((store)=> store.auth)
    
  return userData.isAuth === false ? <Navigate to ="/LogIn" /> : component
}

export default PrivateRoute