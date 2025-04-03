import { Box, styled } from '@mui/material'

const PageContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '100%',
    flexGrow: '1',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),

    '&> .page-body': {
      flexGrow: '1',
      width: '100%',
      marginTop: '24px',
    },

    '&> .page-body-non-success-cell': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 'unset',

      '&> .title': {
        fontWeight: '600',
        textAlign: 'center',
      },
      '&> .description': {
        fontWeight: '400',
        textAlign: 'center',
        marginTop: theme.spacing(0.5),
      },
    },

    '& .page-body-non-success-image': {
      width: '200px',
      marginBottom: theme.spacing(2),
    },

    '& .link': {
      padding: theme.spacing(2),
      borderRadius: '50%',
    },

    '& .link-selected': {
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      borderRadius: theme.spacing(4),
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '& .page-body-non-success-image': {
        width: '50%',
      },
    },
  },
}))

export default PageContainer
