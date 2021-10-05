import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25C685'
    },
    red: {
      main: '#FF464F',
      second: '#FF565E',
      disabled: '#FFE5E7'
    },
    orange: {
      main: '#FF8A34',
      second: '#FF974A',
      disabled: '#FFEFE3'
    },
    yellow: {
      main: '#FFBC25',
      second: '#FFC542',
      disabled: '#FEF3D9'
    },
    green: {
      main: '#25C685',
      second: '#3DD598',
      disabled: '#D4F5E9'
    },
    blue: {
      main: '#005DF2',
      second: '#0062FF',
      disabled: '#E3EEFF'
    },
    purple: {
      main: '#6952DC',
      second: '#755FE2',
      disabled: '#EDEAFD'
    },
    darkGreen: {
      main: '#1A3B34',
      second: '#899A96'
    },
    darkBlue: {
      main: '#30444E'
    },
    white: {
      main: '#FFFFFF',
      second: '#E4E9F3'
    }
  },
  typography: {
    fontFamily: ['monospace', 'Robotto', 'Mplus 1p', 'Josefin Sans'].join(','),
    fontSize: 14
  }
});

export default theme;
