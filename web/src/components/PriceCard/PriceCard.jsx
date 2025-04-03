import { Box, Typography } from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

import Button from '../Button/Button'

import PriceCardContainer from './PriceCardContainer'

// TODO: UPGRADE COMPONENT
const PriceCard = ({
  title,
  content,
  selected,
  price,
  features,
  link,
  linkDisabled,
  linkStartIcon,
}) => {
  // SETTING LOCAL VARIABLES
  // SETTING SELECTED CLASS
  const selectedStyle = selected ? 'selected-price-card' : ''

  return (
    <PriceCardContainer className={`price-card ${selectedStyle}`}>
      <Typography variant="h5" className="price-card-title">
        {title}
      </Typography>
      <Typography variant="body1" className="price-card-subtitle">
        {content}
      </Typography>
      <Box className="price-card-value-container">
        <Typography
          variant="body1"
          className="price-card-value"
          color={selected ? 'primary.main' : ''}
        >
          {price}
        </Typography>
      </Box>
      <Typography variant="body1" className="feature-list-label">
        Feature List
      </Typography>
      {features && (
        <Box component="ul" className="feature-list">
          {features.map((feature, index) => {
            return (
              <Typography
                key={index + 1}
                variant="body1"
                className="feature-list-item"
                component="div"
              >
                {feature}
              </Typography>
            )
          })}
        </Box>
      )}
      <Box className="price-card-action-container">
        <Button
          variant="contained"
          component={RedwoodLink}
          size="large"
          to={link}
          disabled={linkDisabled}
          startIcon={linkStartIcon}
          fullWidth
        >
          Get Started
        </Button>
      </Box>
    </PriceCardContainer>
  )
}

export default PriceCard
