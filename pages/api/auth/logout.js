import { serialize } from "cookie";

export default async function login  (req, res) {
  if (req.method === "POST") {
    try {
      const {myTokenName} = req.cookies
      if (!myTokenName) {
        res.status(400).send("A token is required")
      } 
      const serialized = serialize("set-admin-cookie", null, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      });
    
      res.setHeader("Set-Cookie", serialized);
      return res.status(200).json({
        message: "Logout successful",
      });
    } catch (e) {
      res.status(400).send('Paso algo en el logout')
      console.log(e.message)
    }
  }
}