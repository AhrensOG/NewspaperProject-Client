import React from 'react'
import { useAuth } from '../../context/authContext'
import { useRouter } from 'next/router'
import axios from 'axios'

const LogOutWithFirebase = () => {
  const router = useRouter()
  const { logOut } = useAuth()
  const handleLogOut = async  () => {
    try {
      await logOut()
      await axios.post("/api/auth/logout")
      router.push('/login')
      } catch (e) {
        console.log(e.message)
      }
  }
  return (
    <button onClick={handleLogOut}>Cerrar sesion</button>
  )
}

export default LogOutWithFirebase