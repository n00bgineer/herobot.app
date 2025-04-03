import { forwardRef } from 'react'

import { Typography, Chip } from '@mui/material'
import { Box } from '@mui/system'

import CustomSelectContainer, {
  CustomFormHelperText,
  CustomMenuItem,
} from './CustomSelectContainer'

// TODO: UPGRADE COMPONENT
const CustomSelect = forwardRef(function CustomSelect(
  { error, helperText, menuItems, ...props },
  ref
) {
  return (
    <Box>
      <CustomSelectContainer
        {...props}
        notched={false}
        variant="outlined"
        ref={ref}
        MenuProps={{
          sx: {
            '& .MuiMenu-list': {
              padding: '0px',
            },
            '& .MuiMenu-paper': {
              borderRadius: '25px',
              marginTop: '10px',
              padding: '0px',
            },
          },
        }}
      >
        <CustomMenuItem key="default" value="default">
          {props.placeholder}
        </CustomMenuItem>
        {menuItems &&
          menuItems.map((selectItem) => {
            return (
              <CustomMenuItem
                key={selectItem.value}
                value={selectItem.value}
                disabled={selectItem.disabled}
              >
                <Box className="MuiMenuItem-label">{selectItem.label}</Box>
                <Chip
                  size="small"
                  label={selectItem.chipLabel}
                  sx={{
                    color: `${selectItem.chipColor}.main`,
                    bgcolor: `${selectItem.chipColor}.100`,
                  }}
                />
              </CustomMenuItem>
            )
          })}
      </CustomSelectContainer>
      {helperText ||
        (error && (
          <CustomFormHelperText>
            <Typography variant="body2" color={error ? 'error' : 'default'}>
              {helperText || error?.message}
            </Typography>
          </CustomFormHelperText>
        ))}
    </Box>
  )
})
export default CustomSelect
