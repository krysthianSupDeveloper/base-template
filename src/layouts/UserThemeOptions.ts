// ** MUI Imports
import { ThemeOptions } from '@mui/material'
import { Label } from 'mdi-material-ui'

// ** To use core palette, uncomment the below import
// import corePalette from 'src/@core/theme/palette'

// ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
// import { useSettings } from 'src/@core/hooks/useSettings'

const UserThemeOptions = (): ThemeOptions => {
  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  // const { settings } = useSettings()

  // ** To use mode (light/dark), skin(default/bordered/semi-dark), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  // const { mode, skin } = settings

  // ** To use core palette, uncomment the below line
  // const palette = corePalette(mode, skin)

  return {
    // components: {
    //   MuiButton: {
    //     styleOverrides: {
    //       outlined: {
    //         color: '#574191',
    //         width: '200px'
    //       },
    //       contained: {
    //         color: '#000000',
    //         background: '#89FFFF',
    //         secondary: {
    //           background: '#00FF33',
    //         }
    //       },
    //       root: {
    //         borderRadius: '5px'
    //       }
    //     },
    //   }
    // },
    palette:{
      primary: {
        light: '#2c98e5',
        main: '#2c7be5',
        dark: '#2569c3',
        contrastText: '#FFF'
      },      
      secondary: {
        light: '#00ff94',
        main: '#6e84a3',
        dark: '#5e708b',
        contrastText: '#FFF'
      },
      success: {
        light: '#829abc',
        main: '#00d97e',
        dark: '#5e708b',
        contrastText: '#FFF'
      },
      error: {
        light: '#ff3c5f',
        main: '#e63757',
        dark: '#c42f4a',
        contrastText: '#FFF'
      },
      warning: {
        light: '#f7cc5f',
        main: '#f6c343',
        dark: '#fdb533',
        contrastText: '#283e59'
      },
      info: {
        light: '#2ebbe4',
        main: '#39afd1',
        dark: '#3095b2',
        contrastText: '#FFF'
      },
      // background: {
      //   default: '#ffffff'
      // }
    },
    typography: {
      fontFamily:
        "'Open Sans', sans-serif",
      body1: {
        color: '#95aac9',
        fontSize: '.8rem'
      },
      h1: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '1.625rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
      h2: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '1.25rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
      h3: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '1.0625rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
      h4: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '.9375rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
      h5: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '.8125rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
      h6: {
        fontFamily:
        '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: '.625rem',
        lineHeight: 1.1,
        color: '#12263f',
      },
    },
    
    components: {
      // MuiDrawer: {
      //   styleOverrides: {
      //     root: {
      //       background: '#000000'
      //     }
      //   }
      // },
      MuiCardHeader: {
        styleOverrides: {
          root: {
            padding: '1rem 1.5rem',
            borderBottom: '1px solid #edf2f9',
            marginBottom: '1.5rem'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                // backgroundColor: '#2c7be5',
              }),
              borderRadius: '.375rem',
              fontSize: '.75rem',
              fontWeight: 400,
              textTransform: 'none',
              boxShadow: 'none !important',
          })
        },
      },
      MuiSvgIcon:{
        styleOverrides: {
          root: {
            fontSize: '.9375rem !important',
          }
        }
      },
      MuiCard:{
        styleOverrides: {
          root: {
            boxShadow: '0 0.75rem 1.5rem rgb(18 38 63 / 3%) !important',
            border: '1px solid #edf2f9',
            borderRadius: '0.5rem'
          }
        }
      },
      MuiChip:{
        styleOverrides: {
          root: {
            borderRadius: '50rem',
            fontSize: '0.65rem',
            height: 'auto'
          },
          label: {
            paddingLeft: '.85em',
            paddingRight: '.85em',
            paddingTop: '.4em',
            paddingBottom: '.4em',
          }
        }
      },
    },
    /*
    palette:{
      primary: {
        light: '#787EFF',
        main: '#666CFF',
        dark: '#5A5FE0',
        contrastText: '#FFF'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1920
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            textTransform: 'none'
          },
          sizeSmall: {
            padding: '6px 16px'
          },
          sizeMedium: {
            padding: '8px 20px'
          },
          sizeLarge: {
            padding: '11px 24px'
          },
          textSizeSmall: {
            padding: '7px 12px'
          },
          textSizeMedium: {
            padding: '9px 16px'
          },
          textSizeLarge: {
            padding: '12px 16px'
          }
        }
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '16px 24px'
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '32px 24px',
            '&:last-child': {
              paddingBottom: '32px'
            }
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box'
          },
          html: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          body: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          '#__next': {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
          }
        }
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    shadows: mode === 'light' ? [
      'none',
      '0px 2px 1px -1px rgba(76, 78, 100, 0.2), 0px 1px 1px 0px rgba(76, 78, 100, 0.14), 0px 1px 3px 0px rgba(76, 78, 100, 0.12)',
      '0px 3px 1px -2px rgba(76, 78, 100, 0.2), 0px 2px 2px 0px rgba(76, 78, 100, 0.14), 0px 1px 5px 0px rgba(76, 78, 100, 0.12)',
      '0px 4px 8px -4px rgba(76, 78, 100, 0.42)',
      '0px 6px 18px -8px rgba(76, 78, 100, 0.56)',
      '0px 3px 5px -1px rgba(76, 78, 100, 0.2), 0px 5px 8px 0px rgba(76, 78, 100, 0.14), 0px 1px 14px 0px rgba(76, 78, 100, 0.12)',
      '0px 2px 10px 0px rgba(76, 78, 100, 0.1)',
      '0px 4px 5px -2px rgba(76, 78, 100, 0.2), 0px 7px 10px 1px rgba(76, 78, 100, 0.14), 0px 2px 16px 1px rgba(76, 78, 100, 0.12)',
      '0px 5px 5px -3px rgba(76, 78, 100, 0.2), 0px 8px 10px 1px rgba(76, 78, 100, 0.14), 0px 3px 14px 2px rgba(76, 78, 100, 0.12)',
      '0px 5px 6px -3px rgba(76, 78, 100, 0.2), 0px 9px 12px 1px rgba(76, 78, 100, 0.14), 0px 3px 16px 2px rgba(76, 78, 100, 0.12)',
      '0px 6px 6px -3px rgba(76, 78, 100, 0.2), 0px 10px 14px 1px rgba(76, 78, 100, 0.14), 0px 4px 18px 3px rgba(76, 78, 100, 0.12)',
      '0px 6px 7px -4px rgba(76, 78, 100, 0.2), 0px 11px 15px 1px rgba(76, 78, 100, 0.14), 0px 4px 20px 3px rgba(76, 78, 100, 0.12)',
      '0px 7px 8px -4px rgba(76, 78, 100, 0.2), 0px 12px 17px 2px rgba(76, 78, 100, 0.14), 0px 5px 22px 4px rgba(76, 78, 100, 0.12)',
      '0px 7px 8px -4px rgba(76, 78, 100, 0.2), 0px 13px 19px 2px rgba(76, 78, 100, 0.14), 0px 5px 24px 4px rgba(76, 78, 100, 0.12)',
      '0px 7px 9px -4px rgba(76, 78, 100, 0.2), 0px 14px 21px 2px rgba(76, 78, 100, 0.14), 0px 5px 26px 4px rgba(76, 78, 100, 0.12)',
      '0px 8px 9px -5px rgba(76, 78, 100, 0.2), 0px 15px 22px 2px rgba(76, 78, 100, 0.14), 0px 6px 28px 5px rgba(76, 78, 100, 0.12)',
      '0px 8px 10px -5px rgba(76, 78, 100, 0.2), 0px 16px 24px 2px rgba(76, 78, 100, 0.14), 0px 6px 30px 5px rgba(76, 78, 100, 0.12)',
      '0px 8px 11px -5px rgba(76, 78, 100, 0.2), 0px 17px 26px 2px rgba(76, 78, 100, 0.14), 0px 6px 32px 5px rgba(76, 78, 100, 0.12)',
      '0px 9px 11px -5px rgba(76, 78, 100, 0.2), 0px 18px 28px 2px rgba(76, 78, 100, 0.14), 0px 7px 34px 6px rgba(76, 78, 100, 0.12)',
      '0px 9px 12px -6px rgba(76, 78, 100, 0.2), 0px 19px 29px 2px rgba(76, 78, 100, 0.14), 0px 7px 36px 6px rgba(76, 78, 100, 0.12)',
      '0px 10px 13px -6px rgba(76, 78, 100, 0.2), 0px 20px 31px 3px rgba(76, 78, 100, 0.14), 0px 8px 38px 7px rgba(76, 78, 100, 0.12)',
      '0px 10px 13px -6px rgba(76, 78, 100, 0.2), 0px 21px 33px 3px rgba(76, 78, 100, 0.14), 0px 8px 40px 7px rgba(76, 78, 100, 0.12)',
      '0px 10px 14px -6px rgba(76, 78, 100, 0.2), 0px 22px 35px 3px rgba(76, 78, 100, 0.14), 0px 8px 42px 7px rgba(76, 78, 100, 0.12)',
      '0px 11px 14px -7px rgba(76, 78, 100, 0.2), 0px 23px 36px 3px rgba(76, 78, 100, 0.14), 0px 9px 44px 8px rgba(76, 78, 100, 0.12)',
      '0px 11px 15px -7px rgba(76, 78, 100, 0.2), 0px 24px 38px 3px rgba(76, 78, 100, 0.14), 0px 9px 46px 8px rgba(76, 78, 100, 0.12)'
    ] : [
      'none',
      '0px 2px 1px -1px rgba(20, 21, 33, 0.2), 0px 1px 1px 0px rgba(20, 21, 33, 0.14), 0px 1px 3px 0px rgba(20, 21, 33, 0.12)',
      '0px 3px 1px -2px rgba(20, 21, 33, 0.2), 0px 2px 2px 0px rgba(20, 21, 33, 0.14), 0px 1px 5px 0px rgba(20, 21, 33, 0.12)',
      '0px 4px 8px -4px rgba(20, 21, 33, 0.42)',
      '0px 6px 18px -8px rgba(20, 21, 33, 0.56)',
      '0px 3px 5px -1px rgba(20, 21, 33, 0.2), 0px 5px 8px 0px rgba(20, 21, 33, 0.14), 0px 1px 14px 0px rgba(20, 21, 33, 0.12)',
      '0px 2px 10px 0px rgba(20, 21, 33,  0.1)',
      '0px 4px 5px -2px rgba(20, 21, 33, 0.2), 0px 7px 10px 1px rgba(20, 21, 33, 0.14), 0px 2px 16px 1px rgba(20, 21, 33, 0.12)',
      '0px 5px 5px -3px rgba(20, 21, 33, 0.2), 0px 8px 10px 1px rgba(20, 21, 33, 0.14), 0px 3px 14px 2px rgba(20, 21, 33, 0.12)',
      '0px 5px 6px -3px rgba(20, 21, 33, 0.2), 0px 9px 12px 1px rgba(20, 21, 33, 0.14), 0px 3px 16px 2px rgba(20, 21, 33, 0.12)',
      '0px 6px 6px -3px rgba(20, 21, 33, 0.2), 0px 10px 14px 1px rgba(20, 21, 33, 0.14), 0px 4px 18px 3px rgba(20, 21, 33, 0.12)',
      '0px 6px 7px -4px rgba(20, 21, 33, 0.2), 0px 11px 15px 1px rgba(20, 21, 33, 0.14), 0px 4px 20px 3px rgba(20, 21, 33, 0.12)',
      '0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 12px 17px 2px rgba(20, 21, 33, 0.14), 0px 5px 22px 4px rgba(20, 21, 33, 0.12)',
      '0px 7px 8px -4px rgba(20, 21, 33, 0.2), 0px 13px 19px 2px rgba(20, 21, 33, 0.14), 0px 5px 24px 4px rgba(20, 21, 33, 0.12)',
      '0px 7px 9px -4px rgba(20, 21, 33, 0.2), 0px 14px 21px 2px rgba(20, 21, 33, 0.14), 0px 5px 26px 4px rgba(20, 21, 33, 0.12)',
      '0px 8px 9px -5px rgba(20, 21, 33, 0.2), 0px 15px 22px 2px rgba(20, 21, 33, 0.14), 0px 6px 28px 5px rgba(20, 21, 33, 0.12)',
      '0px 8px 10px -5px rgba(20, 21, 33, 0.2), 0px 16px 24px 2px rgba(20, 21, 33, 0.14), 0px 6px 30px 5px rgba(20, 21, 33, 0.12)',
      '0px 8px 11px -5px rgba(20, 21, 33, 0.2), 0px 17px 26px 2px rgba(20, 21, 33, 0.14), 0px 6px 32px 5px rgba(20, 21, 33, 0.12)',
      '0px 9px 11px -5px rgba(20, 21, 33, 0.2), 0px 18px 28px 2px rgba(20, 21, 33, 0.14), 0px 7px 34px 6px rgba(20, 21, 33, 0.12)',
      '0px 9px 12px -6px rgba(20, 21, 33, 0.2), 0px 19px 29px 2px rgba(20, 21, 33, 0.14), 0px 7px 36px 6px rgba(20, 21, 33, 0.12)',
      '0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 20px 31px 3px rgba(20, 21, 33, 0.14), 0px 8px 38px 7px rgba(20, 21, 33, 0.12)',
      '0px 10px 13px -6px rgba(20, 21, 33, 0.2), 0px 21px 33px 3px rgba(20, 21, 33, 0.14), 0px 8px 40px 7px rgba(20, 21, 33, 0.12)',
      '0px 10px 14px -6px rgba(20, 21, 33, 0.2), 0px 22px 35px 3px rgba(20, 21, 33, 0.14), 0px 8px 42px 7px rgba(20, 21, 33, 0.12)',
      '0px 11px 14px -7px rgba(20, 21, 33, 0.2), 0px 23px 36px 3px rgba(20, 21, 33, 0.14), 0px 9px 44px 8px rgba(20, 21, 33, 0.12)',
      '0px 11px 15px -7px rgba(20, 21, 33, 0.2), 0px 24px 38px 3px rgba(20, 21, 33, 0.14), 0px 9px 46px 8px rgba(20, 21, 33, 0.12)'
    ],
    zIndex: {
      appBar: 1200,
      drawer: 1100
    } */
  }
}

export default UserThemeOptions
