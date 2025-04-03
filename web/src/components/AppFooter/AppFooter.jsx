import { Box, Typography } from '@mui/material'
import { Link } from "react-router";
import constants from 'src/state/constants.jsx'
import CustomLink from '../Custom/CustomLink/CustomLink'
import AppFooterContainer from './AppFooterContainer'

const AppFooter = () => {
  const {
    appName,
    appDescription,
    appLocation,
    links,
  } = constants.global.footer || {}
  const { about, contact, social } = links || {}
  return (
    <AppFooterContainer>
      <Box className="about">
        <Box className="app-logo-container" component={Link} to={{ pathname: "/" }}>
          <Typography variant="h3" component="div" className="app-name">
            {appName}
          </Typography>
        </Box>
        <Typography variant="body2" className="description">
          {appDescription}
        </Typography>
        <Typography variant="body3" className="location-attribute">
          {appLocation}
        </Typography>
      </Box>
      <Box className="resources">
        <Box className="links-container">
          <Typography variant="body1" className="header">
            {about.title}
          </Typography>
          {about.urls.map((link, index) => {
            const { url, text, isExternal = false } = link || {}
            return (
              <CustomLink
                key={index + 1}
                component="a"
                size="small"
                variant="none"
                isExternal={isExternal}
                target="_blank"
                to={url}
              >
                {text}
              </CustomLink>
            )
          })}
        </Box>
        <Box className="links-container">
          <Typography variant="body1" className="header">
            {contact.title}
          </Typography>
          <CustomLink
            component="a"
            size="small"
            variant="none"
            isExternal={contact.urls[0].isExternal}
            to={contact.urls[0].url}
          >
            {contact.urls[0].text}
          </CustomLink>
          <Typography variant="body3">
            Address:{' '}
            <CustomLink
              component="a"
              size="small"
              variant="none"
              isExternal={contact.urls[1].isExternal}
              to={contact.urls[1].url}
            >
              {contact.urls[1].text}
            </CustomLink>
          </Typography>
        </Box>
        <Box className="links-container">
          <Typography variant="body1" className="header">
            {social.title}
          </Typography>
          {social.urls.map((link, index) => {
            const { url, text, isExternal = false } = link || {}
            return (
              <CustomLink
                key={index + 1}
                component="a"
                size="small"
                variant="none"
                isExternal={isExternal}
                target="_blank"
                to={url}
              >
                {text}
              </CustomLink>
            )
          })}
        </Box>
      </Box>
    </AppFooterContainer>
  )
}

export default AppFooter
