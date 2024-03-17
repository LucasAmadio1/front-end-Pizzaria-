import '../../styles/globals.scss'
import { AppProps } from 'next/app'

import { AuthProvider } from '../contexts/AuthContex'

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    )
}

export default MyApp
