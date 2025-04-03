import { forwardRef } from 'react'

import CustomButtonContainer from './CustomButtonContainer'

const CustomButton = forwardRef(function CustomButton(props, ref) {
  return <CustomButtonContainer {...props} ref={ref} />
})
export default CustomButton
