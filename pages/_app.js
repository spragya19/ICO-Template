import Header from '../src/Components/Header'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return <><Header />  <Component {...pageProps} /></>
}

export default MyApp
