import { Box, styled } from '@mui/material'

const PageHeaderContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: theme.spacing(3),

    '&> .title-container': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      marginTop: theme.spacing(1),

      '&> .title': {
        fontWeight: '700',
      },
      '&> .description': {
        marginTop: theme.spacing(0.5),
      },
    },

    '&> .children-container': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: theme.spacing(1),
    },
  },
}))

export default PageHeaderContainer
