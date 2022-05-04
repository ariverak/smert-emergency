import Image from 'next/image'
import { Header as MantineHeader, createStyles, Box } from '@mantine/core'
import { HEADER_HEIGHT } from 'config/constants'
import smertLogo from 'assets/smert-white.png'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundColor: theme.colors.primary[6],
    display: 'flex',
    alignItems: 'center'
  }
}))

function Header() {
  const { classes } = useStyles()
  return (
    <MantineHeader
      className={classes.root}
      height={HEADER_HEIGHT}
      px='xl'>
      <Box>
        <Image width={145} height={48} src={smertLogo} />
      </Box>
    </MantineHeader>
  )
}

export default Header
