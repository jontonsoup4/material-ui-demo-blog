import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, grey, teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[500],
      dark: deepPurple[700],
    },
    secondary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700],
    },
    background: {
      default: grey[200],
    },
  },
  overrides: {
    MuiTouchRipple: {
      ripple: {
        color: deepPurple[500],
      }
    }
  }
});

export default theme;
