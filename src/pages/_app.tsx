import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'config/apolloClient'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'styles/index.css'
import { useEffect, useState } from 'react'
import Loading from 'components/Loading'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const [ready, setReady] = useState(false)
  const apolloClient = useApollo(pageProps)
  useEffect(() => {
    const getToken = () => {
      const token = window.prompt('Token de acceso')
      if (token) {
        localStorage.setItem('jwt', token)
      } else {
        getToken()
      }
    }
    if (typeof window !== 'undefined' && !localStorage.getItem('jwt')) {
      getToken()
      setReady(true)
    } else {
      setReady(true)
    }
  }, [])
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
        <ApolloProvider client={apolloClient}>
          {ready ? <Component {...pageProps} /> : <Loading />}
        </ApolloProvider>
      </MantineProvider>
    </>
  )
}
