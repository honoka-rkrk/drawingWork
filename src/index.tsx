import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FirebaseApp from './FirebaseApp';
import { PCTheme, PhoneTheme } from './Other/Style/theme';
import MediaQuery from 'react-responsive';
import { Provider } from 'react-redux';
import store from './Other/Store/store';

ReactDOM.render(
  <>
    <Provider store={store}>
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
    </Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
