import Head from "next/head"
import Tag from "../components/Tag"
import TopNewSection from "../components/TopNewSection/TopNewSection"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Newspaper | Home</title>
      </Head>
      <TopNewSection/>
      <h1 className='text-6xl text-center p-2'>
      Welcome to <a className='hover:underline text-[#0070f3]' href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  )
}
