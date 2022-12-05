import Head from "next/head";
import TopNewSection from "../components/TopNewSection/TopNewSection";
import NavBar from "../components/NavBar/NavBar"
import TrendingSection from "../components/TrendingSection/TrendingSection"
import ImportantSection from "../components/RelevantsNews/ImportantSection";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import NextNProgress from "nextjs-progressbar";
import MiddleComponent from "../components/MiddleComponent";
import SideBar2 from "../components/SideBar2/SideBar2";
import SideBar3 from "../components/SideBar2/SideBar3";



export default function Home () {
  const [loader, setLoader] = useState(false)
  const [nav, setNav] = useState(false);

  return(
    <div className="bg-slate-50">
      <Head>
        <title>Newspaper | Home</title>
      </Head>
      <NextNProgress />
      <NavBar setNav={setNav} nav={nav}/>
      <SideBar3 nav={nav} setNav={setNav}/>
      <MiddleComponent/>
      <TopNewSection setLoader={setLoader}/>
      <TrendingSection loader={loader}/>
      <ImportantSection loader={loader}/>
      <Footer/>
    </div>
  )
}
