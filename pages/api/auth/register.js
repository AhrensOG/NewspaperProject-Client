// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"
import {SignJWT} from 'jose';
import {serialize} from "cookie"

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default async function register  (req, res) {
  if (req.method === "POST") {
    try {
      const {email, password} = req.body
      const credentials = {
        email,
        password
      }
      const data = await axios.post(`${SERVER_URL}/user`, credentials )
      return res.status(200).send("Register succesfully")
    } catch (e) {
      res.status(400).send("Register Failed")
    }
  }
}
