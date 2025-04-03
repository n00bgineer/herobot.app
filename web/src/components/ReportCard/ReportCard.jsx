import React from 'react'

import {
  ArrowDownward,
  ArrowDropDown,
  ArrowDropUp,
  Bookmark,
} from '@mui/icons-material'
import { Typography, Box, Tooltip } from '@mui/material'

import CustomIconButton from '../Custom/CustomIconButton/CustomIconButton'
import CustomImage from '../Custom/CustomImage/CustomImage'

import ReportCardContainer from './ReportCardContainer'

const ReportCard = ({
  title,
  description,
  properties,
  icons,
  map,
  mapOptimised,
  propertyTitle,
  marketPriceTitle,
  marketPriceValue,
  actualPriceTitle,
  actualPriceValue,
  actualPriceRate,
  actualPriceDelta,
}) => {
  return (
    <ReportCardContainer elevation={2}>
      <Box className="header">
        <Box className="header-data">
          <Typography variant="h5" component="div" className="title">
            {title}
          </Typography>
          <Typography variant="body2" color="grey.main" className="description">
            {description}
          </Typography>
        </Box>
        <CustomIconButton size="large">
          <Bookmark fontSize="inherit" color="primary" />
        </CustomIconButton>
      </Box>
      <Box className="body">
        <Box className="map-container">
          <CustomImage
            src={map}
            placeholderSrc={mapOptimised}
            alt="Map image"
          />

          {icons.map((iconData, index) => (
            <Tooltip
              key={index}
              title={iconData.title}
              placement="top"
              arrow
              enterDelay={200}
              leaveDelay={0}
            >
              <Box className={iconData.className}>
                <CustomImage
                  src={iconData.icon}
                  placeholderSrc={iconData.icon}
                  alt={iconData.title}
                />
              </Box>
            </Tooltip>
          ))}
        </Box>
        <Box className="data-container">
          <Box className="price-container">
            <Box className="market-price-container">
              <Typography variant="body2" color="grey.main" component="div">
                {marketPriceTitle}
              </Typography>
              <Typography variant="h5" component="div" className="price">
                {marketPriceValue}
              </Typography>
            </Box>

            <Box className="actual-price-container">
              <Typography variant="body2" color="grey.main" component="div">
                {actualPriceTitle}
              </Typography>
              <Typography variant="h5" component="div" className="price">
                {actualPriceValue}{' '}
                <Typography component="span" className="rate-indicator">
                  (
                  {actualPriceDelta < 0 ? (
                    <ArrowDropDown color="error" />
                  ) : (
                    <ArrowDropUp color="success" />
                  )}{' '}
                  {actualPriceRate})
                </Typography>
              </Typography>
            </Box>
          </Box>

          <Box className="properties-container">
            <Typography
              variant="body2"
              color="grey.main"
              component="div"
              className="title"
            >
              {propertyTitle}
            </Typography>
            {properties.map((property, index) => (
              <Typography key={index} variant="body2" className="property">
                {property.name}
                <ArrowDownward fontSize="18px" />
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </ReportCardContainer>
  )
}

export default ReportCard
