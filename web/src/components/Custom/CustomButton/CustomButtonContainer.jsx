import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
// CUSTOM BUTTON COMPONENT
const CustomButtonContainer = styled(MuiButton)(({ theme }) => ({
  '&.MuiButton-root': {
    borderRadius: '9999px',
    textTransform: 'none',

    '&:hover': {
      filter: 'brightness(120%)',
    },

    // OUTLINED STYLES
    '&.MuiButton-outlined': {
      borderWidth: '2px',
    },

    // SIZE STYLES
    '&.MuiButton-sizeSmall': {
      padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      fontSize: theme.typography.body2.fontSize,
    },
    '&.MuiButton-sizeMedium': {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontSize: theme.typography.body1.fontSize,
    },
    '&.MuiButton-sizeLarge': {
      padding: `${theme.spacing(2)} ${theme.spacing(2.5)}`,
      fontSize: theme.typography.h6.fontSize,
    },

    // ICON SIZE STYLES
    '& .MuiButton-iconSizeSmall': {
      fontSize: theme.typography.body2.fontSize,
    },
    '& .MuiButton-iconSizeMedium': {
      fontSize: theme.typography.body1.fontSize,
    },
    '& .MuiButton-iconSizeLarge': {
      fontSize: theme.typography.h6.fontSize,
    },

    '& .MuiButton-startIcon': {
      margin: 'unset',
      padding: 'unset',
      marginRight: theme.spacing(1),
    },
    '& .MuiButton-endIcon': {
      margin: 'unset',
      padding: 'unset',
      marginLeft: theme.spacing(1),
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiButton-root': {
      // SIZE STYLES
      '&.MuiButton-sizeSmall': {
        padding: `${theme.spacing(0.5)} ${theme.spacing(0.1)}`,
        fontSize: theme.typography.body3.fontSize,
      },
      '&.MuiButton-sizeMedium': {
        padding: `${theme.spacing(0.75)} ${theme.spacing(1.75)}`,
        fontSize: theme.typography.body1.fontSize,
      },
      '&.MuiButton-sizeLarge': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        fontSize: theme.typography.h6.fontSize,
      },
    },
  },
}))

export default CustomButtonContainer
