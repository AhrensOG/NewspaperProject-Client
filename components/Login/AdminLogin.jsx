import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/authContext'

const Login = () => {

  const { signIn } = useAuth()
const [credentials, setCredentials] = useState({
  email: "",
  password: ""
})
const router = useRouter()

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handlerSubmit = async (e) => {
    try {
      e.preventDefault()
      await signIn(credentials.email, credentials.password)
      const data = await axios.post("/api/auth/login", credentials)
      if (data.status === 200) {
        router.push("/admin/dashboard/noticias")
      }
      
    } catch (error) {
      console.log(e.message) 
    }
  }

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input type="email" name='email' placeholder='email' onChange={handleChange} />
        <input type="password" name='password' placeholder='password' onChange={handleChange}/>
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login