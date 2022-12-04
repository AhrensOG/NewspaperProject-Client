import axios from 'axios'
import React from 'react'
import { useAuth } from '../../context/authContext'
import { useRouter } from 'next/router'

const Logout = () => {
  const router = useRouter()
  const { logOut } = useAuth()
  const handleLogout = async () => {
    try {
      await logOut()
      const data = await axios.post("/api/auth/logout")
      router.push('/login')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}

export default Logout