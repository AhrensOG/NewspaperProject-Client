// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import {SignJWT} from 'jose';
import {serialize} from "cookie"

export default async function login  (req, res) {
  if (req.method === "POST") {
    try {
      const {email, password} = req.body
      const credentials = {
        email,
        password
      }
      const data = await axios.post("http://localhost:3001/user", credentials )
      const id = data.data
      const encoder = new TextEncoder()
      const alg = 'HS256'
      const jwt = await new SignJWT({ id})
      .setProtectedHeader({ alg, type:"JWT" })
      .setIssuedAt()
      // .setExpirationTime('2h')
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))

      const serialized = serialize('myTokenName', jwt, { 
        httpOnly: false,       
        sameSite: 'strict',
        maxAge: 60 * 60 * 6 * 1,
        path: "/"
      })
      res.setHeader("Set-Cookie", serialized)
      return res.status(200).send("Login succesfully")
    } catch (e) {
      console.log(e.message)
    }
  }
}
