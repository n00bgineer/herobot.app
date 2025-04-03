import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomLinkContainer = styled(Link)(({ theme }) => ({
  '&.MuiLink-root': {
    fontFamily: theme.typography.h1.fontFamily,

    '&:hover': {
      textDecoration: 'none',
    },

    // VARIANT STYLES
    '&.MuiLink-text': {
      background: 'transparent',
    },

    // SIZE STYLES
    '&.MuiLink-small': {
      fontSize: theme.typography.body3.fontSize,
    },
    '&.MuiLink-medium': {
      fontSize: theme.typography.body1.fontSize,
    },
    '&.MuiLink-large': {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}))

export default CustomLinkContainer
