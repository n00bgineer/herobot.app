import { Snackbar, styled } from '@mui/material'

const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
  '&.MuiSnackbar-root > .MuiPaper-root': {
    borderRadius: '99999px',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,

    '&> .MuiSnackbarContent-message': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(1),
      width: '100%',
    },
  },
}))

export default CustomSnackbar
