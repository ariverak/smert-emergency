import { useEffect, useMemo } from 'react'
import type { NextPage } from 'next'
import { AppShell } from '@mantine/core'
import Navbar from 'components/layout/Navbar'
import Header from 'components/layout/Header'
import Map from 'components/Map'
import { useQuery } from '@apollo/client'
import { ALL_EDIFICIOS_QUERY } from 'api/queries'
import Loading from 'components/Loading'

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(ALL_EDIFICIOS_QUERY, { ssr: false, pollInterval: 3000 })

  useEffect(() => {
    if (error && typeof window !== 'undefined' && !loading) {
      setTimeout(() => {
        localStorage.setItem('jwt', '')
      }, 2000)
    }
  }, [error, loading])

  const markers = useMemo(() => {
    if (!data) return []
    return data.allEdificios.filter((x: any) => x.coordinates)
  }, [data])

  return (
    <AppShell
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          padding: 0,
          backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0]
        }
      })}
    >
      {loading ? (
        <Loading />
      ) : (
        <Map markers={markers} />
      )}
    </AppShell>
  )
}

export default Home
