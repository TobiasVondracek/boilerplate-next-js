import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <Component {...pageProps} />
      <Head>
        <title>Spolek boilerplate</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </div>
  )
}

