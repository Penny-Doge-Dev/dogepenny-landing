import '@styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ScreenProvider } from '@contexts/ScreenContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScreenProvider>
      <>
        <Head>
          <title>Penny Doge</title>
        </Head>
        <Component {...pageProps} />
      </>
    </ScreenProvider>
  )
}
