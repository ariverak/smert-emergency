import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <title>Smert</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colors: {
            primary: [
              '#4F7187',
              '#426881',
              '#345F7D',
              '#27587A',
              '#1A5278',
              '#0D4D78',
              '#004879',
              '#0B3F62',
              '#123750',
              '#163043'
            ]
          },
          primaryColor: 'primary',
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
