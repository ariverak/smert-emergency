import type { NextPage } from 'next'
import { AppShell } from '@mantine/core'
import Navbar from 'components/layout/Navbar'
import Header from 'components/layout/Header'

const Home: NextPage = () => {
  return (
    <AppShell
      padding='md'
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      })}
    >
      {/* Your application here */}
    </AppShell>
  )
}

export default Home
