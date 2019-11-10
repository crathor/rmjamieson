import { makeStyles } from '@material-ui/core/styles';
import books from '../../assets/books.jpg';
import rebecca from '../../assets/rebecca.png';

const styles = makeStyles(theme => ({
  authorSection: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    alignItems: 'center',
    background: theme.palette.white.main,

    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(10)}px 0px`,
    },
  },
  authorContainer: {},
  authorGrid: {
    background: theme.palette.primary.light,
    color: theme.palette.white.main,
    padding: 40,
  },
  authorCard: {
    width: 400,
    background: theme.palette.primary.main,
    padding: theme.spacing(0.5),
    boxShadow: theme.shadows[10],

    [theme.breakpoints.down('md')]: {
      margin: '0 auto 40px auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  aboutCard: {
    marginBottom: theme.spacing(4),
    overflow: 'initial',
    background: theme.palette.primary.main,
    color: theme.palette.white.main,
  },
  aboutCardContent: {
    width: '98%',
    margin: 'auto',
    background: theme.palette.primary.light,
    transform: 'translate(0, -15px)',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
  },
  authorImage: {
    height: 'auto',
    width: 400,
    border: `2px solid ${theme.palette.primary.main}`,
    transform: 'translate(-15px, -15px)',
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
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
}));

export default styles;
