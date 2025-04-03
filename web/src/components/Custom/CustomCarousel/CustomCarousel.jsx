import React, { useCallback, useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Box } from '@mui/material'
import mod from 'src/utils/math'
import CustomIconButton from '../CustomIconButton/CustomIconButton'
import CustomCarouselContainer from './CustomCarouselContainer'

/*
 * @name CustomCarousel
 * @description CAROUSEL COMPONENT WITH SMOOTH TRANSITIONS
 * @param {Object} props COMPONENT PROPS
 * @returns {React.Component} CAROUSEL COMPONENT
 */
const CustomCarousel = ({
  items = [],
  currentIndex,
  childrenProps = {},
  header = <></>,
  setCurrentIndex = () => {},
  renderChildren = () => <></>,
}) => {
  // SETTING HOOKS
  const containerRef = useRef(null)

  // SETTING LOCAL VARIABLES
  const showNavigation = items.length > 3
  const defaultVisibleItems = [
    mod(currentIndex - 1, items.length),
    currentIndex,
    mod(currentIndex + 1, items.length),
  ]

  // SETTING LOCAL STATES
  const [visibleItems, setVisibleItems] = useState(defaultVisibleItems)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(null) // 'left' or 'right'

  // ANIMATION CLEANUP EFFECT
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
        setDirection(null)
      }, 600) // MATCH THIS WITH CSS TRANSITION DURATION

      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  /*
   * @name handlePrevious
   * @description METHOD TO HANDLE PREVIOUS SLIDE TRANSITION
   * @returns {undefined}
   */
  const handlePrevious = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection('left')

    // DELAY THE STATE UPDATE TO SYNC WITH ANIMATION
    setTimeout(() => {
      setVisibleItems([
        mod(currentIndex - 2, items.length),
        mod(currentIndex - 1, items.length),
        mod(currentIndex, items.length),
      ])
      setCurrentIndex((prev) => mod(prev - 1, items.length))
    }, 300) // HALF OF THE TRANSITION DURATION
  }, [currentIndex, isAnimating, items.length, setCurrentIndex])

  /*
   * @name handleNext
   * @description METHOD TO HANDLE NEXT SLIDE TRANSITION
   * @returns {undefined}
   */
  const handleNext = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setDirection('right')

    // DELAY THE STATE UPDATE TO SYNC WITH ANIMATION
    setTimeout(() => {
      setVisibleItems([
        mod(currentIndex, items.length),
        mod(currentIndex + 1, items.length),
        mod(currentIndex + 2, items.length),
      ])
      setCurrentIndex((prev) => mod(prev + 1, items.length))
    }, 300) // HALF OF THE TRANSITION DURATION
  }, [currentIndex, isAnimating, items.length, setCurrentIndex])

  /*
   * @name getCardClassName
   * @description DETERMINE CARD CLASS BASED ON INDEX AND ANIMATION STATE
   * @param {number} index CARD INDEX
   * @returns {string} CLASS NAME STRING
   */
  const getCardClassName = (index) => {
    let className = `feature-card card-${index}`

    if (isAnimating) {
      if (direction === 'left') {
        if (index === 0) className += ' sliding-left'
        if (index === 2) className += ' entering-left'
      } else if (direction === 'right') {
        if (index === 2) className += ' sliding-right'
        if (index === 0) className += ' entering-right'
      }
    }

    return className
  }

  return (
    <CustomCarouselContainer>
      <Box ref={containerRef} className="carousel-container">
        <Box className="carousel-header">{header}</Box>
        <Box className="carousel-content">
          {visibleItems.map((item, index) => {
            return React.cloneElement(renderChildren, {
              ...childrenProps,
              ...items[item],
              className: getCardClassName(index),
              index,
              key: item,
            })
          })}
        </Box>
      </Box>

      {/* NAVIGATION BUTTONS */}
      {showNavigation && (
        <>
          <CustomIconButton
            className="carousel-nav-button prev"
            onClick={handlePrevious}
            size="large"
            color="primary"
            disabled={isAnimating}
          >
            <ChevronLeft />
          </CustomIconButton>

          <CustomIconButton
            className="carousel-nav-button next"
            onClick={handleNext}
            size="large"
            color="primary"
            disabled={isAnimating}
          >
            <ChevronRight />
          </CustomIconButton>
        </>
      )}
    </CustomCarouselContainer>
  )
}

export default CustomCarousel
