import { Box, Card, Typography } from '@mui/material'
import AppLogoOptimised from 'src/assets/movingcastle-logo--optimised.webp'
import AppLogo from 'src/assets/movingcastle-logo.webp'
import CustomButton from 'src/components/Custom/CustomButton/CustomButton'
import CustomImage from 'src/components/Custom/CustomImage/CustomImage'

import FatalErrorPageContainer from './FatalErrorPageContainer'
import { Link } from 'react-router'

const FatalErrorPage = () => (
    <FatalErrorPageContainer>
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
            Oops! Something went wrong
          </Typography>
          <Typography variant="body2" className="description">
            Please try refreshing the app or
          </Typography>
        </Box>
        <CustomButton
          size="medium"
          variant="contained"
          fullWidth={true}
          component={Link}
          to={{ pathname: "/" }}
        >
          Go back
        </CustomButton>
      </Card>
    </FatalErrorPageContainer>
  )

  export default FatalErrorPage;