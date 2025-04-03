import { useState } from 'react'

import { Menu as MenuIcon } from '@mui/icons-material'
import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'

import constants from 'src/state/constants.jsx'

import CustomButton from '../Custom/CustomButton/CustomButton'
import CustomImage from '../Custom/CustomImage/CustomImage'
import CustomMenu from '../Custom/CustomMenu/CustomMenu'

import AppHeaderContainer from './AppHeaderContainer'
import { Link, useLocation } from 'react-router'

const AppHeader = ({ id }) => {
  // SETTING HOOKS
  const { pathname } = useLocation()
  const isMobileViewport = useMediaQuery('(min-width:900px)')

  // SETTING LOCAL STATES
  const [anchorEl, setAnchorEl] = useState(null)

  // SETTING LOCAL VARIABL  ES
  const { appName, links } =
    constants.global.header || {}
  const open = Boolean(anchorEl)

  // SETTING CONDITIONALS
  if (
    pathname !== "/" &&
    links.findIndex((link) => link.children.toUpperCase() === 'HOME') === -1
  ) {
    links.unshift({
      to: "/",
      children: 'Home',
      variant: 'text',
    })
  } else if (
    pathname === "/" &&
    links.findIndex((link) => link.children.toUpperCase() === 'HOME') !== -1
  ) {
    links.shift()
  }

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
          links.map((link, index) => {
            const { to, children, variant, ...linkProps } = link || {}

            return (
              <CustomButton
                key={index + 1}
                component={Link}
                to={to}
                size="medium"
                variant={variant}
                {...linkProps}
              >
                {children}
              </CustomButton>
            )
          })
        )}
      </Box>
    </AppHeaderContainer>
  )
}

export default AppHeader
