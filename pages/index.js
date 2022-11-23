import Head from "next/head";
import TopNewSection from "../components/TopNewSection/TopNewSection";
import NavBar from "../components/NavBar/NavBar"
import TrendingSection from "../components/TrendingSection/TrendingSection"
import ImportantSection from "../components/RelevantsNews/ImportantSection";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import NextNProgress from "nextjs-progressbar";



export default function Home () {
  const [loader, setLoader] = useState(false)

  return(
    <div className="bg-slate-50">
      <Head>
        <title>Newspaper | Home</title>
      </Head>
      <NextNProgress />
      <NavBar />
      <div className="flex justify-center py-6">
        <img src="/Logo.png" alt="IMG" className="lg:h-[130px] lg:w-[350px] m-[-20]" />
      </div>
      <TopNewSection setLoader={setLoader}/>
      <TrendingSection loader={loader}/>
      <ImportantSection loader={loader}/>
      <Footer/>
    </div>
  )
}
