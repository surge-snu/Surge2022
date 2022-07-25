import Head from "next/head";
import Image from "next/image";
import "../styles/routes/Home.scss";
import Gallery from "./routes/gallery";
import Stats from "./routes/stats";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stats />
      <Gallery />
    </div>
  );
}
