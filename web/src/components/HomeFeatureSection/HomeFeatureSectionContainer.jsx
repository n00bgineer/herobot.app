import { Box, styled } from '@mui/material'

const HomeFeatureSectionContainer = styled(Box)(({ theme }) => ({
  // TOP LEVEL CONTAINER
  '&.MuiBox-root': {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    minHeight: '95vh',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.divider}`,

    // FEATURE DESCRIPTION CONTAINER
    '&> .feature-description-container': {
      flexGrow: '1',
      width: '35%',
      maxWidth: '35%',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      marginLeft: 'auto',
      marginRight: 'auto',
      gap: theme.spacing(2),

      // HEADER SECTION
      '&> .header': {
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        margin: '0px auto',

        '&> .title': {
          fontWeight: '500',
          textAlign: 'left',
        },

        '&> .description': {
          fontWeight: '400',
          textAlign: 'left',
        },
      },

      // PLAN CONTENT STYLING
      '& .plan-content': {
        display: 'flex',
        flexDirection: 'column',

        '& .plan-title': {
          fontWeight: 600,
        },

        '& .pricing-section': {
          '& .price': {
            fontWeight: 700,
            color: theme.palette.primary.main,
          },

          '& .price-description': {
            color: theme.palette.text.secondary,
          },

          '& .additional-note': {
            color: theme.palette.warning.main,
            display: 'block',
          },
        },

        '& .plan-cta': {
          marginTop: theme.spacing(2),
          marginBottom: theme.spacing(2),
        },

        '& .features-list': {
          padding: 0,

          '& .MuiListItem-root': {
            paddingLeft: 0,
            gap: theme.spacing(0.5),

            '& .MuiListItemIcon-root': {
              minWidth: 'auto',
            },
          },
        },

        '& .benefits-section': {
          marginTop: theme.spacing(2),

          '& .benefits-title': {
            fontWeight: 600,
          },

          '& .MuiList-root': {
            padding: 0,
          },
        },
      },
    },

    // REPORT CARD CONTAINER
    '&> .report-card-container': {
      width: '50%',
      maxWidth: '50%',
      overflow: 'hidden',
      background: theme.palette.grey[100],
      flexGrow: '1',
      padding: theme.spacing(2),
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderLeft: `1px solid ${theme.palette.divider}`,

      '&> .report-card-container-all': {
        width: '100%',
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: theme.spacing(3),
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: '1',

        '&> *': {
          width: '65%',
          maxWidth: '600px',
        },
      },
    },
  },

  // RESPONSIVE DESIGN - LARGE SCREENS
  [theme.breakpoints.down('xl')]: {
    '&.MuiBox-root': {
      '& .report-card-container': {
        '&> .report-card-container-all': {
          '&> *': {
            width: '80%',
            maxWidth: 'unset',
          },
        },
      },
    },
  },

  // RESPONSIVE DESIGN - LARGE SCREENS
  [theme.breakpoints.down('lg')]: {
    '&.MuiBox-root': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      width: '100%',
      minHeight: '500px',
      height: 'auto',

      '&> .feature-description-container': {
        width: '80%',
        maxWidth: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexGrow: '0',
        padding: theme.spacing(4),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),

        '&> *': {
          width: '100%',
          maxWidth: '100%',
        },
      },

      '& .report-card-container': {
        width: '100%',
        maxWidth: '100%',
        borderLeft: 'none',
        borderTop: `1px solid ${theme.palette.divider}`,

        '&> .report-card-container-all': {
          '&> *': {
            width: '500px',
          },
        },
      },
    },
  },

  // RESPONSIVE DESIGN - MEDIUM SCREENS
  [theme.breakpoints.down('md')]: {
    '&.MuiBox-root': {
      '&> .feature-description-container': {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(2),
      },

      '& .report-card-container': {
        width: '100%',
        maxWidth: '100%',
        '&> .report-card-container-all': {
          '&> *': {
            width: '75%',
            maxWidth: 'unset',
          },
        },
      },
    },
  },

  // RESPONSIVE DESIGN - SMALL SCREENS
  [theme.breakpoints.down('sm')]: {
    '&.MuiBox-root': {
      '& .report-card-container': {
        '&> .report-card-container-all': {
          '&> *': {
            width: '100%',
          },
        },
      },
    },
  },
}))

export default HomeFeatureSectionContainer
