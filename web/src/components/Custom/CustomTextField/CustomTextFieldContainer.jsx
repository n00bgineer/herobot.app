import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTextFieldContainer = styled(TextField)(({ theme }) => ({
  '&.MuiTextField-root': {
    '&.MuiTextField-sizeSmall > .MuiInputBase-root': {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      fontSize: theme.typography.body2.fontSize,
    },

    '&.MuiTextField-sizeMedium > .MuiInputBase-root': {
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
      fontSize: theme.typography.body1.fontSize,
    },

    '&.MuiTextField-sizeLarge > .MuiInputBase-root': {
      padding: `${theme.spacing(2)}`,
      fontSize: theme.typography.h6.fontSize,
    },

    '&> .MuiInputBase-root': {
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: theme.spacing(1),
      background: '#FFF',

      '&> .MuiInputBase-input': {
        padding: 'unset',
        flexGrow: '1',
      },
    },

    '&> .MuiFormHelperText-root': {
      fontSize: theme.typography['body3'].fontSize,
    },
  },
}))

export default CustomTextFieldContainer
