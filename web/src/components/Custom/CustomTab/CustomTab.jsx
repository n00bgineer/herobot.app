import { forwardRef } from 'react'

import CustomButton from '../CustomButton/CustomButton'

import CustomTabContainer from './CustomTabContainer'

const CustomTab = forwardRef(function CustomTab(
  {
    size = 'medium',
    color = 'primary',
    variant = 'contained',
    className,
    selected,
    ...props
  },
  ref
) {
  // SETTING LOCAL VARIABLES
  const tabClasses = [className || ''].join(' ')

  return (
    <CustomTabContainer
      {...props}
      component={CustomButton}
      size={size}
      color={color}
      variant={selected ? variant : 'default'}
      className={tabClasses}
      ref={ref}
    />
  )
})
export default CustomTab
