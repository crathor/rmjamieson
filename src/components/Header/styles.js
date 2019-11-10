import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  header: {
    zIndex: 3000,
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
