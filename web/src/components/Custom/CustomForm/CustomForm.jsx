import React, { useRef } from 'react'
import { DevTool } from '@hookform/devtools'
import { Box } from '@mui/material'
import config from '../../../../config'

const CustomForm = ({
  devMode = config.NODE_ENV !== 'PRODUCTION',
  control,
  children = null,
  onSubmit = () => {},
  ...props
}) => {
  // SETTING HOOKS
  const myFormRef = useRef(null)

  return (
    <>
      <Box
        {...props}
        noValidate
        ref={myFormRef}
        component="form"
        onSubmit={onSubmit}
      >
        {children}
      </Box>
      {devMode === true && (
        <DevTool control={control} placement="bottom-left" />
      )}
    </>
  )
}

export default CustomForm
