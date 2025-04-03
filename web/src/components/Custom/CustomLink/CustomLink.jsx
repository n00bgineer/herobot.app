import { forwardRef, useEffect } from 'react'

import { Link as RouterLink, useLocation } from '@redwoodjs/router'

import CustomLinkContainer from './CustomLinkContainer'

/*
 * @name CustomLink
 * @description ENHANCED LINK COMPONENT SUPPORTING EXTERNAL LINKS, INTERNAL ROUTING, AND SMOOTH SCROLLING
 * @param {boolean} isExternal WHETHER THE LINK POINTS TO AN EXTERNAL RESOURCE
 * @param {string} to DESTINATION URL OR SECTION ID
 * @param {string} size SIZE VARIANT OF THE LINK ('small', 'medium', 'large', or 'none')
 * @param {React.ReactNode} children CHILD ELEMENTS TO RENDER
 * @param {string} className ADDITIONAL CSS CLASSES
 * @param {Object} props ADDITIONAL PROPS TO PASS TO THE LINK COMPONENT
 * @returns {React.ReactElement} CUSTOMIZED LINK COMPONENT
 */
const CustomLink = forwardRef(function CustomLink(
  {
    isExternal = false,
    to = '#',
    size = 'none',
    children,
    className,
    ...props
  },
  ref
) {
  const location = useLocation()

  /*
   * @name handleClick
   * @description HANDLES CLICK EVENT FOR SECTION NAVIGATION WITH SMOOTH SCROLLING
   * @param {Event} e CLICK EVENT OBJECT
   * @returns {undefined}
   */
  const handleClick = (e) => {
    if (!isExternal && to.startsWith('#')) {
      e.preventDefault()

      const targetId = to.substring(1)
      const element = document.getElementById(targetId)

      if (element) {
        // IF ON DIFFERENT PAGE, NAVIGATE TO HOME FIRST
        if (location.pathname !== '/') {
          window.location.href = `/${to}`
          return
        }

        // SMOOTH SCROLL TO SECTION
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })

        // UPDATE URL WITHOUT PAGE RELOAD
        window.history.pushState({}, '', to)
      }
    }
  }

  /*
   * @name handleInitialScroll
   * @description HANDLES INITIAL SCROLL ON PAGE LOAD IF URL CONTAINS A HASH
   * @returns {undefined}
   */
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const element = document.getElementById(location.hash.substring(1))
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
    }
  }, [location])

  // SETTING LOCAL VARIABLES
  const commonProps = {
    component: isExternal ? 'a' : RouterLink,
    [isExternal ? 'href' : 'to']: to,
    onClick: handleClick,
  }

  // DETERMINE SIZE CLASS
  const sizeClass = size === 'none' ? '' : `MuiLink-${size}`
  const linkClasses = [className || '', sizeClass].filter(Boolean).join(' ')

  return (
    <CustomLinkContainer
      {...props}
      {...commonProps}
      className={linkClasses}
      ref={ref}
    >
      {children}
    </CustomLinkContainer>
  )
})

export default CustomLink
