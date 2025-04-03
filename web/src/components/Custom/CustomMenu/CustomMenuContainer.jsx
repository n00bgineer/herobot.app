import { Menu, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

// CUSTOM COMPONENTS
// CUSTOM MENU COMPONENT
const CustomMenuContainer = styled(Menu)(({ theme }) => ({
  '& .MuiList-root': {
    padding: theme.spacing(1),
  },
  '& .MuiMenu-paper': {
    borderRadius: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
  },
}))
// CUSTOM MENU ITEM COMPONENT
export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.MuiMenuItem-root': {
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    display: 'flex',
  },
}))
// CUSTOM LIST ITEM COMPONENT
export const CustomListItemIcon = styled(ListItemIcon)(() => ({
  '& .MuiSvgIcon-root': {
    height: '20px',
    width: '20px',
  },
}))
// CUSTOM LIST ITEM TEXT COMPONENT
export const CustomListItemText = styled(ListItemText)(() => ({
  '&.MuiListItemText-root': {
    flexGrow: 1,
    textAlign: 'left',
  },
}))

export default CustomMenuContainer
