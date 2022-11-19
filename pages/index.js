import NavBar from "../components/NavBar/NavBar"
import TrendingSection from "../components/NavBar/HomeNewsSection/TrendingSection"
import { useEffect, useState } from "react"
const axios = require("axios")


export default function Landing () {
      const [trending, setTrending] = useState([])
    useEffect(() => { async function getAll ()  {
      const data = await axios.get("http://localhost:3001/post?tag=Tendencias&limit=4")
      setTrending(data.data)
    }
    getAll()
  }, [])
  console.log(trending.length)
return(
  <>
      <NavBar/> 
      <div className="flex">
        {trending.map((e) => {
          return(
            <TrendingSection title={e.title} image={e.image} type={e.tag.name}/>
          )
        })}
      </div>
      <div>Sí</div>
    </>
  )
}

// export default function Home() {
// 
//   return (
//     <div>
//         <h1 className='text-6xl text-center p-2'>
//           Welcome to <a className='hover:underline text-[#0070f3]' href="https://nextjs.org">Next.js!</a>
//         </h1>
//     </div>
//   )
// }
