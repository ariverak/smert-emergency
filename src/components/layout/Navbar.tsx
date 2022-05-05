import React from 'react'
import { Navbar as MantineNavbar } from '@mantine/core'
import { HEADER_HEIGHT } from 'config/constants'
// import Search from 'components/Search'

function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }} height={`calc(100vh - ${HEADER_HEIGHT})`} p="xs">
      <MantineNavbar.Section>
        <div id="geocoder"></div>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <pre id="result"></pre>
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
