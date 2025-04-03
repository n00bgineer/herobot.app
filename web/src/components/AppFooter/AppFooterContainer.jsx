import { Box, styled } from '@mui/material'

const AppFooterContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    '&> .about': {
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingRight: theme.spacing(3),
      maxWidth: '400px',
      gap: theme.spacing(1),

      '&> .description': {
        maxWidth: '85%',
      },

      '&> .location-attribute': {
        fontWeight: '400',
        marginTop: theme.spacing(-0.5),
      },
    },

    '&> .resources': {
      flexGrow: '1',
      width: 'calc(100% - 400px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: theme.spacing(1.5),
      paddingTop: theme.spacing(1),

      '&> .links-container': {
        '&> .header': {
          fontWeight: '600',
        },
        '&> a': {
          paddingRight: theme.spacing(1),
        },
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '&> .about': {
        width: '100%',
        maxWidth: 'unset',
      },

      '&> .resources': {
        width: '100%',
      },
    },
  },
}))

export default AppFooterContainer
