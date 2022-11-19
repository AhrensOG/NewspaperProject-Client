import Head from "next/head";
import TopNewSection from "../components/TopNewSection/TopNewSection";
import NavBar from "../components/NavBar/NavBar"
import TrendingSection from "../components/TrendingSection/TrendingSection"



export default function Home () {
  return(
    <>
      <Head>
        <title>Newspaper | Home</title>
      </Head>
      <NavBar />
      <TopNewSection />
      <TrendingSection/>
    </>
  )
}
