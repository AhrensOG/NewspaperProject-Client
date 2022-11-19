import Head from "next/head";
import TopNewSection from "../components/TopNewSection/TopNewSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Newspaper | Home</title>
      </Head>
      <NavBar />
      <TopNewSection />
    </div>
  );
}
