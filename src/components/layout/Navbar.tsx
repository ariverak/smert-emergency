import React from 'react'
import { Navbar as MantineNavbar } from '@mantine/core'
import { HEADER_HEIGHT } from 'config/constants'
import SearchSection from 'components/SearchSection'

function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }} height={`calc(100vh - ${HEADER_HEIGHT})`} p="xs">
      <MantineNavbar.Section>
        <SearchSection />
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
