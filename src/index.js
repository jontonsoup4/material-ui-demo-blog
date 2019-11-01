import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import theme from './theme';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>,
  document.querySelector('#root'),
);
