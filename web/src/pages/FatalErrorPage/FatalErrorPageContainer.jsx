import { Box, styled } from '@mui/material'

const FatalErrorPageContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    alignItems: 'center',
    background: theme.palette.error.light,
    backgroundImage:
      'url("https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1685172167/tracepath/assets/404_dswv4j.jpg")',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%',

    '&> .MuiCard-root': {
      color: '#000!important',
      backdropFilter: 'blur(10px)',
      background: 'rgba(255, 255, 255, 0.5)!important',
      borderRadius: theme.spacing(3),
      padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
      width: '450px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing(2),

      '& .title': {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: theme.typography.h6.fontSize,
      },
      '& .description': {
        textAlign: 'center',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '&> .MuiCard-root': {
        width: '90%',
      },
    },
  },
}))

export default FatalErrorPageContainer
