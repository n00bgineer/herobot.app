import { Box, styled } from '@mui/material'

export const CustomMarkdownContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    '& h1': {
      ...theme.typography.h3,
      fontWeight: '500',
    },
    '& h2': {
      ...theme.typography.h4,
      fontWeight: '500',
    },
    '& h3': {
      ...theme.typography.h5,
      fontWeight: '500',
    },
    '& h4': {
      ...theme.typography.h6,
      fontWeight: '500',
    },
    '& h5': {
      ...theme.typography.body1,
      fontWeight: '500',
    },
    '& h6': {
      ...theme.typography.body2,
      fontWeight: '500',
    },
    '& p': {
      ...theme.typography.body2,
    },
    '& div': {
      ...theme.typography.body2,
    },
  },
}))
