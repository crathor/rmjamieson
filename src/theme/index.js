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
    // primary: {
    //   main: '#14213D',
    //   light: '#545D71',
    // },
    // secondary: {
    //   main: '#297373',
    // },
    white: {
      main: '#FCF9F6',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
