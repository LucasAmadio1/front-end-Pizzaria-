import '../../styles/globals.scss'
import { AppProps } from 'next/app'

import { AuthProvider } from '../contexts/AuthContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} theme='dark'/>
    </AuthProvider>
    )
}

export default MyApp
