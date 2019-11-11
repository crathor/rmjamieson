import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    minHeight: '100vh',

    [theme.breakpoints.down('sm')]: {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 100,
      paddingBottom: 40,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'stretch',
  },
  heroGrid: {
    flexGrow: 1,
  },
  heroGridItem: {
    height: 500,
  },

  // CARD STYLES

  hookCard: {
    height: '100%',
    flexGrow: 1,
    border: `5px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.light,
    color: theme.palette.white.main,
    boxShadow: theme.shadows[9],
  },
  hookCardFront: {
    background: theme.palette.primary.main,
  },
  hookCardHeader: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),

    '&:after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,

      width: 60,
      borderBottom: `2px solid #FFF`,
    },
  },
  icon: {
    fontSize: '12vw',
    color: '#fff',
  },
  iconBack: {
    fontSize: 59,
    color: '#fff',
  },
  cardTitle: {},
  frontCard: {
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default styles;
