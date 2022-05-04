import React from 'react'
import { Navbar as MantineNavbar } from '@mantine/core'

function Navbar() {
  return (
    <MantineNavbar width={{ base: 300 }} height={500} p="xs">
      <MantineNavbar.Section>First section</MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
