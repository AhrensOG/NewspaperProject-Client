import React from 'react'
import Login from '../../components/Login/Login'
import LoginWithFirebaseAuth from '../../components/Login/LoginWithFirebaseAuth'
import Logout from '../../components/Login/Logout'
import LogOutWithFirebase from '../../components/Login/LogOutWithFirebase'
import Register from '../../components/Login/Register'

const index = () => {
  return (
    <div>
      <Login/>
      {/* <LoginWithFirebaseAuth/> */}
      <LogOutWithFirebase/>
      {/* <Logout/> */}
      <Register/>
    </div>
  )
}

export default index