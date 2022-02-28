import '../styles/globals.css'
import AppContextProvider from "../utils/app-context";

function MyApp({ Component, pageProps }) {
  return (
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
  )
}

export default MyApp
