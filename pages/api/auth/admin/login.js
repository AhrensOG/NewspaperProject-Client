// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import {SignJWT} from 'jose';
import {serialize} from "cookie"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default async function login  (req, res) {
  if (req.method === "POST") {
    try {
      const {email, password} = req.body
      const credentials = {
        email,
        password
      }
      const data = await axios.post(`${SERVER_URL}/auth`, credentials )
      const userData = data.data
      if (userData.admin) {
        const id = userData.id
        const encoder = new TextEncoder()
        const alg = 'HS256'
        const jwt = await new SignJWT({ id })
        .setProtectedHeader({ alg, type:"JWT" })
        .setIssuedAt()
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))
  
        const serialized = serialize('adminCookie', jwt, { 
          httpOnly: false,       
          sameSite: 'strict',
          maxAge: 60 * 60 * 6 * 1,
          path: "/"
        })
        res.setHeader("Set-Cookie", serialized)
        return res.status(200).send("Login succesfully")
      }else {
        res.status(400).send("El email o la contraseña no son correctos | O el usuario no es Admin")
      }
    } catch (e) {
      res.status(400).send(e)
    }
  }
}
