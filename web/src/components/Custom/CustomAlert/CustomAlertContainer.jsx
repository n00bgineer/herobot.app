import { Alert as MuiAlert } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomAlertContainer = styled(MuiAlert)(({ theme }) => ({
  // DEFAULT STYLES
  '&.MuiAlert-root': {
    borderRadius: theme.shape.borderRadius,
    wordBreak: 'break-word',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    // DEFAULT CLASSES
    '& .MuiAlert-icon': {
      marginRight: theme.spacing(1),
      padding: 'unset',
    },
    '& .MuiAlert-message': {
      padding: 'unset',
      color: 'inherit',
    },
    '& .MuiAlert-action': {
      padding: 'unset',
    },

    // SIZE STYLES
    '&.MuiAlert-small': {
      paddng: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      fontSize: theme.typography.body3.fontSize,
      '& .MuiAlert-icon': {
        fontSize: theme.typography.body3.fontSize,
      },
    },
    '&.MuiAlert-medium': {
      paddng: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontSize: theme.typography.body2.fontSize,
      '& .MuiAlert-icon': {
        fontSize: theme.typography.body2.fontSize,
      },
    },
    '&.MuiAlert-large': {
      paddng: `${theme.spacing(2)} ${theme.spacing(3)}`,
      fontSize: theme.typography.body1.fontSize,
      '& .MuiAlert-icon': {
        fontSize: theme.typography.body1.fontSize,
      },
    },

    // VARIANT CLASSES
    '&.MuiAlert-outlined': {
      borderWidth: '2px',
    },

    // OUTLINED COLOR CLASSES
    '&.MuiAlert-outlined.MuiAlert-colorInfo': {
      color: theme.palette.info.dark,
      background: theme.palette.info['100'],
    },
    '&.MuiAlert-outlined.MuiAlert-colorError': {
      color: theme.palette.error.dark,
      background: theme.palette.error['100'],
    },
    '&.MuiAlert-outlined.MuiAlert-colorPrimary': {
      color: theme.palette.primary.dark,
      background: theme.palette.primary['100'],
    },
    '&.MuiAlert-outlined.MuiAlert-colorWarning': {
      color: theme.palette.warning.dark,
      background: theme.palette.warning['100'],
    },
    '&.MuiAlert-outlined.MuiAlert-colorSuccess': {
      color: theme.palette.success.dark,
      background: theme.palette.success['100'],
    },

    // FULLWIDTH CLASS
    '&.MuiAlert-fullwidth': {
      width: '100%',
    },
  },
}))

export default CustomAlertContainer
