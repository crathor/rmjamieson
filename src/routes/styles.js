import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  shell: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.white.main,
    minHeight: '100vh',
  },
}));

export default styles;
