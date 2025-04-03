import { Paper } from '@mui/material'

import CustomMenuContainer, {
  CustomListItemIcon,
  CustomListItemText,
  CustomMenuItem,
} from './CustomMenuContainer'

const CustomMenu = ({ anchorEl, open, onClose, menuItems, ...props }) => {
  return (
    open && (
      <Paper>
        <CustomMenuContainer
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
          {...props}
          className={(props.className ? props.className : '') + ' menu'}
        >
          {menuItems &&
            menuItems.map((menuItem, index) => {
              const {
                icon,
                label,
                selected,
                onClick = () => {},
                ...menuProps
              } = menuItem
              return (
                <CustomMenuItem
                  selected={selected}
                  key={index + 1}
                  onClick={onClick}
                  {...menuProps}
                >
                  {icon && <CustomListItemIcon>{icon}</CustomListItemIcon>}
                  {label && <CustomListItemText>{label}</CustomListItemText>}
                </CustomMenuItem>
              )
            })}
        </CustomMenuContainer>
      </Paper>
    )
  )
}

export default CustomMenu
