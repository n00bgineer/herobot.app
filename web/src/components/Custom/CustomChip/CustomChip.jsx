import { Chip, styled } from '@mui/material'

const CustomChip = styled(Chip)(({ theme }) => ({
  '&.MuiChip-root': {
    borderRadius: '99999999px',

    '&> .MuiChip-icon': {
      marginLeft: theme.spacing(0.75),
      fontSize: theme.typography.body1.fontSize,
    },
    '&> .MuiChip-label': {
      fontSize: theme.typography.body1.fontSize,
    },

    '&.MuiChip-sizeSmall': {
      '&> .MuiChip-label': {
        fontSize: theme.typography.body3.fontSize,
      },
      '&> .MuiChip-icon': {
        fontSize: theme.typography.body3.fontSize,
      },
    },

    '&.MuiChip-sizeMedium': {
      '&> .MuiChip-label': {
        fontSize: theme.typography.body2.fontSize,
      },
      '&> .MuiChip-icon': {
        fontSize: theme.typography.body2.fontSize,
      },
    },
  },
}))

export default CustomChip
