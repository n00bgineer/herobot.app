import {
  FormHelperText as MuiFormHelperText,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
} from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiMenuItem-root': {
    borderRadius: theme.spacing(2),
    margin: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiMenuItem-label': {
    flexGrow: '1',
  },
}))
export const CustomSelectContainer = styled(MuiSelect)(({ theme }) => ({
  // ROOT STYLES
  '&.MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
  },
  '&.MuiOutlinedInput-root:hover': {
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
  },

  // SIZE STYLES
  '&MuiInputBase-sizeSmall': {
    padding: '5px',
  },

  // ADORNMENT STYLES
  '&.MuiInputBase-adornedStart .MuiSvgIcon-root': {
    margin: '10px',
  },
  '&.MuiInputBase-adornedEnd .MuiSvgIcon-root': {
    margin: '10px',
  },

  // ICON STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.secondary.main,
  },
  '&.MuiInputBase-colorError.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.error.main,
  },
  '&.MuiInputBase-colorInfo.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.info.main,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused .MuiSvgIcon-root': {
    color: theme.palette.success.main,
  },
  '&.Mui-error .MuiSvgIcon-root': {
    color: `${theme.palette.error.main}!important`,
  },

  // FOCUSED STYLES
  '&.MuiInputBase-colorPrimary.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  '&.MuiInputBase-colorSecondary.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.secondary.main}`,
  },
  '&.MuiInputBase-colorInfo.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.info.main}`,
  },
  '&.MuiInputBase-colorError.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },
  '&.MuiInputBase-colorSuccess.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.success.main}`,
  },
  '&.MuiError.Mui-focused': {
    boxShadow: `0 0 5px ${theme.palette.error.main}`,
  },

  // SELECT STYLES
  '& .MuiSelect-icon': {
    margin: '0px 0px 0px 10px!important',
  },
  '& .MuiOutlinedInput-input': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  '& .MuiOutlinedInput-input > .MuiMenuItem-label': {
    flexGrow: '1',
  },
}))
export const CustomFormHelperText = styled(MuiFormHelperText)(() => ({
  '&.MuiFormHelperText-root': {
    margin: '10px 0px',
    textAlign: 'center',
  },
}))

export default CustomSelectContainer
