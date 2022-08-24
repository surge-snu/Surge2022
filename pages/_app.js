import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import AuthModal from "../Components/AuthModal/AuthModal";
import "../styles/root/globals.scss";

delete theme.styles.global

function MyApp({ Component, pageProps }) {
	const theme = extendTheme({
		// line spacing default
		colors: {
			brand: "#000"
		}
	});
	
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <AuthModal />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
