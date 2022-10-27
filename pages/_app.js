import AuthModal from "../Components/AuthModal/AuthModal";
import "../styles/root/globals.scss";
import { AuthProvider, getUserFromSession } from "../context/authContext";
import App from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, user }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <AuthProvider ssrUser={user}>
      <Head>
        <title>Surge 2022</title>
        <meta
          name="description"
          content="Shiv Nadar IOE's annual Sports Fest"
        />
        <link rel="icon" href="/Img/SurgeCircleSmall.png" />
      </Head>
      <AuthModal />
      <NextNProgress color="#ff4f46" height={5} />
      {getLayout(<Component {...pageProps} />)}
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  if (appContext.router.isSsr === undefined) {
    const appProps = await App.getInitialProps(appContext);
    const user = await getUserFromSession(appContext.ctx);
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
};

export default MyApp;
