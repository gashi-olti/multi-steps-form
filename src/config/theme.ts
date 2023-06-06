import { createTheme, Theme, Components } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';

const appTheme = createTheme({
  typography: {
    fontFamily: twinTheme`fontFamily.sans`,
    fontWeightRegular: twinTheme`fontWeight.normal`,
    fontWeightMedium: twinTheme`fontWeight.medium`,
    fontWeightBold: twinTheme`fontWeight.bold`,
    h1: {
      textTransform: 'uppercase',
      fontSize: twinTheme`fontSize.4xl`,
      lineHeight: twinTheme`lineHeight.10`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: twinTheme`fontSize.2xl`,
      lineHeight: twinTheme`lineHeight.8`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    h3: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    h4: {
      fontSize: twinTheme`fontSize.base`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    h5: {
      fontSize: twinTheme`fontSize.sm`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    h6: {
      fontSize: twinTheme`fontSize.xs`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.gray[700]`,
    },
    subtitle1: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.light`,
      color: twinTheme`colors.gray[700]`,
    },
    subtitle2: {
      fontSize: twinTheme`fontSize.base`,
      color: twinTheme`colors.gray[700]`,
    },
    body1: {
      fontSize: twinTheme`fontSize.base`,
      color: twinTheme`colors.gray[700]`,
    },
    body2: {
      fontSize: twinTheme`fontSize.xs`,
      color: twinTheme`colors.gray[700]`,
    },
    caption: {
      fontSize: twinTheme`fontSize.xs`,
      color: twinTheme`colors.gray[700]`,
    },
  },
  palette: {
    primary: {
      main: twinTheme`colors.cyan[600]`,
      light: twinTheme`colors.cyan[300]`,
      dark: twinTheme`colors.cyan[800]`,
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  shape: {
    borderRadius: 20,
  },
});

const overrides = (theme: Theme): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        padding: theme.spacing(1.5, 3.5),
        transition: 'opacity 250ms ease-in-out',
        fontWeight: theme.typography.fontWeightMedium,
        borderRadius: twinTheme`borderRadius.full`,
        textTransform: 'none',
      },
      contained: {
        color: twinTheme`colors.white`,
        backgroundColor: theme.palette.primary.dark,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        '&.MuiInputBase-root': {
          borderRadius: twinTheme`borderRadius.full`,
        },
        '& > fieldset': {
          borderRadius: twinTheme`borderRadius.full`,
        },
      },
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        '&.MuiButtonBase-root': {
          textTransform: 'uppercase',
        },
      },
    },
  },
});

export default createTheme({
  ...appTheme,
  components: overrides(appTheme),
});
