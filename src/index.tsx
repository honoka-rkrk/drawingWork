import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FirebaseApp from './FirebaseApp';
import { PCTheme, PhoneTheme } from './Style/theme';
import MediaQuery from 'react-responsive';

ReactDOM.render(
  <>
    <MediaQuery query='(min-width:767px)'>
      <MuiThemeProvider theme={PCTheme}>
        <Router>
          <FirebaseApp>
            <App />
          </FirebaseApp>
        </Router>
      </MuiThemeProvider>
    </MediaQuery>
    <MediaQuery query='(max-width:767px)'>
      <MuiThemeProvider theme={PhoneTheme}>
        <Router>
          <FirebaseApp>
            <App />
          </FirebaseApp>
        </Router>
      </MuiThemeProvider>
    </MediaQuery>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
