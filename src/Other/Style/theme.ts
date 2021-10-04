import { createTheme } from '@material-ui/core/styles';

export const PCTheme = createTheme({
  palette: {
    primary: {
      main: '#25C685'
    },
    secondary: {
      main: '#FF464F'
    }
  }
});

export const PhoneTheme = createTheme({
  palette: {
    primary: {
      main: '#25C685'
    },
    secondary: {
      main: '#FF464F'
    }
  },
  typography: {
    fontSize: 10
  }
});
