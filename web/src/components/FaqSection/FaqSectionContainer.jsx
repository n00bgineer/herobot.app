import { Box, styled } from '@mui/material'

const FaqSectionContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    padding: theme.spacing(2),

    // HEADER STYLES
    '& .faq-header': {
      textAlign: 'left',
      marginBottom: theme.spacing(4),

      '& .faq-title': {
        fontWeight: 600,
        color: theme.palette.text.primary,
      },

      '& .faq-description': {
        color: theme.palette.text.secondary,
        fontWeight: '400!important',
      },
    },

    // GRID LAYOUT
    '& .faq-grid': {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: theme.spacing(4),
      marginBottom: theme.spacing(2),

      '& .faq-item': {
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.spacing(3),
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          backgroundColor: theme.palette.grey[100],
          transform: 'translateY(-2px)',
        },

        '& .faq-icon': {
          color: theme.palette.primary.main,
          borderRadius: theme.spacing(1),
          border: `1px solid #000`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: theme.spacing(1),
        },

        '& .faq-content': {
          flex: 1,

          '& .faq-question': {
            fontWeight: 600,
            marginBottom: theme.spacing(1),
            color: theme.palette.text.primary,
          },

          '& .faq-answer': {
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
          },
        },
      },
    },
  },

  // RESPONSIVE STYLES
  [theme.breakpoints.down('xl')]: {
    '&.MuiBox-root': {
      '& .faq-grid': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '& .faq-grid': {
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: theme.spacing(3),
        marginBottom: theme.spacing(2),

        '& .faq-item': {
          padding: theme.spacing(0),
          gap: theme.spacing(2),

          '&:hover': {
            backgroundColor: 'unset',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
  },
}))

export default FaqSectionContainer
