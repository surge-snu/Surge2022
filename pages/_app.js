import AuthModal from "../Components/AuthModal/AuthModal";
import "../styles/root/globals.scss";
import { AuthProvider, getUser } from "../context/authContext";
import App from "next/app";

function MyApp({ Component, pageProps, user }) {
  return (
    <AuthProvider ssrUser={user}>
      <AuthModal />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  if (appContext.router.isSsr === undefined) {
    const appProps = await App.getInitialProps(appContext);
    const user = await getUser(appContext.ctx);
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
};

export default MyApp;
