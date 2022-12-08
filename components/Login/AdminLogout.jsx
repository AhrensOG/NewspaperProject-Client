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
      await axios.post("/api/auth/logout")
      router.push('/login')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <div>
      <button className='font-roboto font-bold text-2xl p-4 text-gray-400 border border-gray-400 rounded-md cursor-pointer' onClick={handleLogout}>Cerrar Sesion</button>
    </div>
  )
}

export default Logout