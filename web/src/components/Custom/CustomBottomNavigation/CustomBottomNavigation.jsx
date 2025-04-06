// IMPORTING PACKAGES/MODULES
import { useEffect, useMemo, useState } from 'react'
import { Divider } from '@mui/material'
import { Link } from 'react-router'
import constants from '../../../state/constants'
import { CustomBottomNavigation, CustomBottomNavigationAction, CustomBottomNavigationContainer } from './CustomBottomNavigationContainer'

const BottomNavigation = ({ ...props }) => {
  // GETTING GLOBAL CONSTANTS
  const { topActions } = useMemo(() => constants.global.bottomNavigation, [])
  const topActionPaths = topActions.map(({ link }) => link)

  // SETTING LOCAL VARIABLES
  const { pathname } = window.location

  // SETTING LOCAL STATES
  const [bottomNavigationValue, setBottomNavigationValue] = useState(
    topActionPaths.includes(pathname)? 
      topActionPaths.findIndex((topActionPath) => topActionPath === pathname): 
      -1
  )

  // SETTING SIDE EFFECTS
  useEffect(() => {
    if (pathname === topActions[0].link) setBottomNavigationValue(0)
    else if (pathname === topActions[1].link) setBottomNavigationValue(1)
    else if (pathname === topActions[2].link) setBottomNavigationValue(2)
    else setBottomNavigationValue(-1)
  }, [pathname, topActions])

  return (
    <CustomBottomNavigationContainer elevation={3}>
      <Divider />
      <CustomBottomNavigation
        {...props}
        showLabels
        value={bottomNavigationValue}
        onChange={(event, newValue) => setBottomNavigationValue(newValue)}
      >
        {topActions.map((topActionItem) => {
          const { label, link, selectedIcon } = topActionItem
          return (
            <CustomBottomNavigationAction
              component={Link}
              to={link}
              key={label}
              label={label}
              icon={selectedIcon}
            />
          )
        })}
      </CustomBottomNavigation>
    </CustomBottomNavigationContainer>
  )
}

export default BottomNavigation
