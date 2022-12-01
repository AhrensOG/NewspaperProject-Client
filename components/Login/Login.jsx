import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {

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
      const data = await axios.post("/api/auth/login", credentials)
      console.log(data)
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
      <div>user@user.com</div>
      <div>this-is-a-passsword</div>
    </div>
  )
}

export default Login