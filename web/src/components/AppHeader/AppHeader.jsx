
import { useState } from 'react'
import { Link } from 'react-router'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import constants from 'src/state/constants.jsx'
import CustomButton from '../Custom/CustomButton/CustomButton'
import CustomMenu from '../Custom/CustomMenu/CustomMenu'
import AppHeaderContainer from './AppHeaderContainer'
import { useAuth0 } from '@auth0/auth0-react'
import env_config from '../../../env_config'

const AppHeader = ({ id }) => {
  // SETTING HOOKS
  const isMobileViewport = useMediaQuery('(min-width:900px)')

  // SETTING LOCAL STATES
  const [anchorEl, setAnchorEl] = useState(null)

  // GETTING AUTHENTICATION STATES & METHODS
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()

  // SETTING LOCAL VARIABL  ES
  const { appName, links } =
    constants.global.header || {}
  const open = Boolean(anchorEl)

  // METHODS
  /**
   * @name handleOpenNavigationMenu
   * @description METHOD TO OPEN NAVIGATION MENU
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const handleOpenNavigationMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  /**
   * @name handleCloseNavigationMenu
   * @description METHOD TO CLOSE NAVIGATION MENU
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const handleCloseNavigationMenu = () => {
    setAnchorEl(null)
  }

  return (
    <AppHeaderContainer id={id}>
      <Box
        className="app-logo-container"
        component={Link}
        to={{ pathname: "/" }}
      >
        <Typography variant="h3" component="div" className="app-name">
          {appName}
        </Typography>
      </Box>

      <Box className="cta-container">
        {!isMobileViewport ? (
          <>
            <IconButton onClick={handleOpenNavigationMenu}>
              <MenuIcon />
            </IconButton>
            <CustomMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseNavigationMenu}
              MenuListProps={{
                'aria-labelledby': 'navigation-menu-item',
              }}
              menuItems={links.map((link) => {
                const { to, children } = link || {}
                return {
                  to: to,
                  component: Link,
                  onClick: handleCloseNavigationMenu,
                  label: children,
                  sx: {
                    minWidth: '150px',
                  },
                }
              })}
            />
          </>
        ) : (
          <>
            {links.map((link, index) => {
              const { to, children, variant, ...linkProps } = link || {}

              return (
                <CustomButton
                  key={index + 1}
                  component={Link}
                  to={to}
                  size="small"
                  variant={variant}
                  {...linkProps}
                >
                  {children}
                </CustomButton>
              )
            })}
            {
              isAuthenticated ?
              <CustomButton 
                variant="contained" 
                size="small" 
                onClick={() => logout({ 
                  logoutParams: {
                    returnTo: env_config.LOGOUT_URL
                  }
                })}>
                Logout
              </CustomButton>:
              <CustomButton 
                variant="contained" 
                size="small" 
                onClick={() => loginWithRedirect()}>
                Login
              </CustomButton>
            }
          </>
        )}
      </Box>
    </AppHeaderContainer>
  )
}

export default AppHeader
