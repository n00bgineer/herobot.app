import React, { useCallback } from 'react'

import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material'
import { Box, Typography, useMediaQuery } from '@mui/material'

import CustomChip from '../Custom/CustomChip/CustomChip'
import CustomImage from '../Custom/CustomImage/CustomImage'

import FeatureCardComponent from './FeatureCardContainer'

const FeatureCard = ({
  title,
  description,
  imgSrc,
  placeholderImgSrc,
  value = 0,
  className,
  tags,
  index,
  onHoverStart = () => {},
  onHoverEnd = () => {},
  ...props
}) => {
  // SETTING HOOKS
  const isMobileViewport = useMediaQuery('(max-width:600px)')

  // SETTING LOCAL VARIABLES
  const cardClasses = ['feature-card']
  const valueClasses = ['value']

  // SETTING CONDITIONALS
  if (className) {
    cardClasses.push(className)
  }
  if (value < 0) {
    valueClasses.push('value-negative')
  } else if (value > 0) {
    valueClasses.push('value-positive')
  }

  // SETTING METHODS
  /**
   * @name handleMouseEnter
   * @description METHOD TO HANDLE THE CURSOR HOVERING OVER THE CARD
   */
  const handleMouseEnter = useCallback(() => {
    onHoverStart(index)
  }, [index])

  const handleMouseLeave = useCallback(() => {
    onHoverEnd(index)
  }, [index])

  return (
    <FeatureCardComponent
      className={cardClasses.join(' ')}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CustomImage
        src={imgSrc}
        placeholderSrc={placeholderImgSrc}
        className="feature-card-image"
        alt={title}
      />
      {title && description && (
        <Box className="header">
          <Box className="header-content">
            {title && (
              <Typography variant="h6" className="title">
                {title}
              </Typography>
            )}
            {description && (
              <Typography
                variant="body3"
                component="div"
                className="description"
              >
                {description}
              </Typography>
            )}
            {tags && (
              <Box className="tags-container">
                {tags.map((tag, index) => {
                  const { tagName, tagIcon } = tag || {}
                  return (
                    <CustomChip
                      key={index + 1}
                      label={tagName}
                      icon={tagIcon}
                      size="small"
                      color="default"
                      variant="outlined"
                    />
                  )
                })}
              </Box>
            )}
          </Box>
          {value !== 0 && (
            <Box className={valueClasses.join(' ')}>
              {value > 0 ? (
                <ArrowDropUp
                  fontSize={isMobileViewport ? 'medium' : 'large'}
                  color={value > 0 ? 'success' : 'primary'}
                />
              ) : (
                <ArrowDropDown
                  fontSize={isMobileViewport ? 'medium' : 'large'}
                  color={value < 0 ? 'error' : 'primary'}
                />
              )}
              <Box className="value-container">
                <Typography
                  variant={isMobileViewport ? 'h4' : 'h3'}
                  component="div"
                  className="value-symbol"
                >
                  {Math.abs(value)}
                  <Typography className="value-percent" component="span">
                    %
                  </Typography>
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      )}
    </FeatureCardComponent>
  )
}

export default FeatureCard
