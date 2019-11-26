import { makeStyles } from '@material-ui/core/styles';
import books from '../../assets/books.jpg';

const styles = makeStyles(theme => ({
  bgImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    background: `url('${books}')`,
    backgroundColor: theme.palette.white.main,
    backgroundBlendMode: 'luminosity',
  },
  column: {
    columnCount: 2,
  },
  // Excerpt Styles

  excerptSection: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    // background: `url('${bookBindings}')`,
    // backgroundColor: theme.palette.white.main,
    // backgroundBlendMode: 'luminosity',
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'calc(100vh - 56px)',
    },
  },
  excerptContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    flexGrow: 1,
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
  },
}));

export default styles;
