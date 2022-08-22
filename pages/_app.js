import AuthModal from "../Components/AuthModal/AuthModal";
import "../styles/root/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthModal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
