import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {},
  },
  palette: {
    primary: {
      main: '#331E38',
      light: '#7D6F80',
    },
    secondary: {
      main: '#3A506B',
    },
    white: {
      main: '#FCF9F6',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
