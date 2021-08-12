import { createTheme } from '@material-ui/core/styles';

export const PCTheme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#ff3d00'
    }
  }
});

export const PhoneTheme = createTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#ff3d00'
    }
  },
  typography: {
    fontSize: 10
  }
});
