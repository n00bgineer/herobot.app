import { Tab as MuiTab } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
const CustomTabContainer = styled(MuiTab)(({ theme }) => ({
  // COMMON STYLES
  '&.MuiTab-root': {
    borderRadius: '9999px',
    textTransform: 'none',
    minHeight: 'unset',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(0.5),

    '& .MuiTab-labelIcon': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '& .MuiTab-icon': {
      margin: 'unset',
      marginRight: theme.spacing(0.5),
    },

    '&.MuiButton-contained': {
      '&.MuiButton-colorPrimary': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      '&.MuiButton-colorSecondary': {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },
      '&.MuiButton-colorSuccess': {
        background: theme.palette.success.main,
        color: theme.palette.success.contrastText,
      },
      '&.MuiButton-colorError': {
        background: theme.palette.error.main,
        color: theme.palette.error.contrastText,
      },
      '&.MuiButton-colorWarning': {
        background: theme.palette.warning.main,
        color: theme.palette.warning.contrastText,
      },
      '&.MuiButton-colorInfo': {
        background: theme.palette.info.main,
        color: theme.palette.info.contrastText,
      },
    },

    '&.MuiButton-outlined': {
      '&.MuiButton-colorPrimary': {
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main,
      },
      '&.MuiButton-colorSecondary': {
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
      },
      '&.MuiButton-colorSuccess': {
        border: `1px solid ${theme.palette.success.main}`,
        color: theme.palette.success.main,
      },
      '&.MuiButton-colorError': {
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
      },
      '&.MuiButton-colorWarning': {
        border: `1px solid ${theme.palette.warning.main}`,
        color: theme.palette.warning.main,
      },
      '&.MuiButton-colorInfo': {
        border: `1px solid ${theme.palette.info.main}`,
        color: theme.palette.info.main,
      },
    },
  },
}))

export default CustomTabContainer
