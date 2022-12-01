import axios from 'axios'
import React from 'react'

const Logout = () => {
  const handleLogout = async () => {
    try {
    const data = await axios.post("/api/auth/logout")
    console.log(data)
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout