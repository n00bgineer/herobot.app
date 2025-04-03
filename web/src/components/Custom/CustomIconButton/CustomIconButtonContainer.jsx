import { IconButton as MuiIconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomIconButtonContainer = styled(MuiIconButton)(({ theme }) => ({
  '&.MuiIconButton-root': {
    borderRadius: '40%',
  },
  '&.MuiIconButton-colorPrimary': {
    color: theme.palette.primary.main,
  },
  '&.MuiIconButton-colorSecondary': {
    color: theme.palette.secondary.main,
  },
  '&.MuiIconButton-colorSuccess': {
    color: theme.palette.success.main,
  },
  '&.MuiIconButton-colorError': {
    color: theme.palette.error.main,
  },
  '&.MuiIconButton-colorWarning': {
    color: theme.palette.warning.main,
  },
  '&.MuiIconButton-colorInfo': {
    color: theme.palette.info.main,
  },
}))

export default CustomIconButtonContainer
