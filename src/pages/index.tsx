import type { NextPage } from 'next'
import { AppShell } from '@mantine/core'
import Navbar from 'components/layout/Navbar'
import Header from 'components/layout/Header'
import Map from 'components/Map'

const Home: NextPage = () => {
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
      <Map />
    </AppShell>
  )
}

export default Home
