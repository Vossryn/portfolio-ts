import React from 'react';
import ReactDOM from 'react-dom';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';

import App from './App'

import './index.scss';

import Theme from "./helpers/ui";

import * as serviceWorker from './serviceWorker';

let newTheme = responsiveFontSizes(Theme);

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={newTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
