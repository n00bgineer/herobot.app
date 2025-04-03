import { Box, Card, Typography } from '@mui/material'

import { Link as RedwoodLink, routes } from '@redwoodjs/router'

import AppLogoOptimised from 'src/assets/movingcastle-logo--optimised.webp'
import AppLogo from 'src/assets/movingcastle-logo.webp'
import CustomButton from 'src/components/Custom/CustomButton/CustomButton'
import CustomImage from 'src/components/Custom/CustomImage/CustomImage'

import NotFoundPageContainer from './NotFoundPageContainer'

export default () => {
  return (
    <NotFoundPageContainer>
      <Card className="card">
        <Box className="app-logo-container">
          <CustomImage
            src={AppLogo}
            placeholderSrc={AppLogoOptimised}
            alt="App logo"
            className="app-logo-medium"
          />
          <Typography variant="h5" className="app-name">
            HeroBot
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" className="title">
            Page not found
          </Typography>
          <Typography variant="body2" className="description">
            The page you&rsquo;re looking for could not be found
          </Typography>
        </Box>
        <CustomButton
          size="medium"
          variant="contained"
          fullWidth={true}
          component={RedwoodLink}
          to={routes.home()}
        >
          Go back
        </CustomButton>
      </Card>
    </NotFoundPageContainer>
  )
}
