import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#45cdd2',
      contrastText: '#fff'
    },
    secondary: {
      main: '#19857b',
      contrastText: '#fff'
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
