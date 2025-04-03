import { Tooltip, styled, tooltipClasses } from '@mui/material'

export const CustomTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.pxToRem(13),
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1, 1.5),
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
    '&:before': {
      border: `1px solid ${theme.palette.primary.dark}`,
    },
  },
}))

// STYLED ABBR
const CustomAbbrContainer = styled('abbr')(({ theme }) => ({
  cursor: 'help',
  textDecoration: 'none',
  borderBottom: `1px dashed ${theme.palette.text.secondary}`,
  transition: theme.transitions.create('border-color'),

  '&:hover': {
    borderColor: theme.palette.text.primary,
    borderBottom: 'unset',
  },
}))

export default CustomAbbrContainer
