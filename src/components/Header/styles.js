import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  spacer: {
    height: 64,

    [theme.breakpoints.down('xs')]: {
      height: 56,
    },
  },
  titleDescription: {
    marginLeft: 'auto',
    listStyle: 'none',
    display: 'flex',
    color: theme.palette.white.main,

    '& li': {
      paddingLeft: 10,
      paddingRight: 10,

      '&:not(:last-child)': {
        borderRight: `1px solid ${theme.palette.white.main}`,
      },
    },
  },
}));

export default styles;
