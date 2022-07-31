import Head from "next/head";
import Image from "next/image";
import "../styles/routes/Home.scss";

export default function Home() {
  const handler = async () => {
    const data = await fetch("/api/notify-list?email=asd");
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="LandingPage"></main>
    </>
  );
}
