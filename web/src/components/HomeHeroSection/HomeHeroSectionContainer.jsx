import { Box, styled } from '@mui/material'

const HomeHeroSectionContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    width: '100%',
    height: 'calc(100vh - 80px)',
    overflow: 'hidden',
    position: 'relative',
    zIndex: '2',

    '&> .hero-container': {
      width: '70%',
      margin: 'auto',
      height: '30%',
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing(2),
      background: 'transparent',

      '&> .hero-txt': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: theme.spacing(0.75),

        '&> .title': {
          textAlign: 'center',
          fontWeight: '500',
          lineHeight: '1.2em',
        },
        '&> .description': {
          textAlign: 'center',
          fontWeight: '300',
        },
      },

      '&> .search-field': {
        width: '650px',
        position: 'relative',

        '&> .search-field-wrapper': {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },

        '&> *': {
          width: '100%',
        },

        '& .MuiFormHelperText-root': {
          textAlign: 'center',
          color: `${theme.palette.primary.main}!important`,
          fontWeight: '500!important',
        },
      },

      '& .city-select-button': {
        padding: 'unset',
        margin: 'unset',
        borderRight: `1px solid ${theme.palette.divider}`,
        borderRadius: '0px',
        paddingRight: theme.spacing(1),
      },

      '& .subscribe-button': {
        margin: 'unset',
        padding: 'unset',
        marginRight: theme.spacing(0.5),
      },
    },
  },

  [theme.breakpoints.down('xl')]: {
    '&.MuiBox-root': {
      '&> .hero-container': {
        width: '90%',
        margin: 'auto',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '&> .hero-container': {
        '&> .search-field': {
          width: '100%',
        },
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    '&.MuiBox-root': {
      '&> .hero-container': {
        width: '100%',
        margin: 'auto',
      },
    },
  },
}))

export default HomeHeroSectionContainer
