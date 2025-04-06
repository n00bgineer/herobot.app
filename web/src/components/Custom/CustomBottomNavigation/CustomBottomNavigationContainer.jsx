// CUSTOM COMPONENTS

import { BottomNavigation, BottomNavigationAction, Paper, styled } from "@mui/material"

// CUSTOM PAPER COMPONENT ENCAPSULATING BOTTOM NAVIGATION & BOTTOM NAVIGATION ACTION COMPONENTS
export const CustomBottomNavigationContainer = styled(Paper)(() => ({
  '&.MuiPaper-root': {
    bottom: '0',
    left: '0',
    position: 'fixed',
    right: '0',
    zIndex: '1200',
  },
}))

// CUSTOM BOTTOM NAVIGATION COMPONENT
export const CustomBottomNavigation = styled(BottomNavigation)(() => ({
  '&.MuiBottomNavigation-root': {
    height: '66px',
  },
}))

// CUSTOM BOTTOM NAVIGATION ELEMENT COMPONENT
export const CustomBottomNavigationAction = styled(BottomNavigationAction)(
  ({ theme }) => ({
    '&.MuiBottomNavigationAction-root': {
      padding: '10px',
    },
    '&.MuiBottomNavigationAction-root.Mui-selected > .MuiSvgIcon-root': {
      background: `${theme.palette.primary.light}`,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
    '&.Mui-selected': {
      fontSize: '15px',
      fontWeight: 'bold',
    },
    '& .MuiBottomNavigationAction-label': {
      fontSize: '15px',
      marginTop: '2px',
    },
  })
)