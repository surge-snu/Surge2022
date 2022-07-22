import Head from "next/head";
import Image from "next/image";
import "../styles/routes/Home.scss";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Surge 2022!</main>
    </div>
  );
}
