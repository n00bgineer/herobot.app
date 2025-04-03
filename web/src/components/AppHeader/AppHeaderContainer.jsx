import { Box, styled } from '@mui/material'

const AppHeaderContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    background: 'transparent',
    position: 'relative',
    zIndex: '2',
    height: '80px',
    maxHeight: '80px',

    '&> .cta-container': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: theme.spacing(1),
    },
  },
}))

export default AppHeaderContainer
