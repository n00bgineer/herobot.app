import { Box, styled } from '@mui/material'

const HomePageContainer = styled(Box)(() => ({
  '&.MuiBox-root': {
    position: 'relative',
    padding: 'unset',
    margin: 'unset',

    '&> .hero-image': {
      padding: 'unset',
      margin: 'unset',
      position: 'absolute',
      zIndex: '1',
      height: '100vh',
      width: '100%',
      top: '0px',
      left: '0px',

      '&> img': {
        height: '100vh',
        width: '100%',
        objectFit: 'cover',
      },
    },
  },
}))

export default HomePageContainer
