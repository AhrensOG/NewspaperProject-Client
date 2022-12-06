import React from 'react'
import Login from '../../components/Login/AdminLogin'
import Logout from '../../components/Login/AdminLogout'

const index = () => {
  return (
    <div>
      <div>
        <Login/>
        <Logout/>
      </div>
      <div>
        <img src="https://www.shutterstock.com/image-vector/journalist-concept-mass-media-news-260nw-1995929273.jpg" alt="" />
      </div>
    </div>
  )
}

export default index