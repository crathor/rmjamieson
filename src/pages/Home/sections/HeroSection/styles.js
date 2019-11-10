import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  hero: {
    height: '100vh',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    padding: 4,
    border: 'rgba(255, 255, 255, 0.3)',
  },
  icon: {
    fontSize: '12vw',
    color: '#fff',
  },
  iconBack: {
    fontSize: 59,
    color: '#fff',
  },

  container: {
    position: 'relative',
    zIndex: 3,
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    borderTop: `4px solid ${theme.palette.white.main}`,
    borderBottom: `4px solid ${theme.palette.white.main}`,

    padding: `${theme.spacing(6)}px ${theme.spacing(6)}px`,
  },
  hookCard: {
    height: '100%',
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
  cardTitle: {},
  frontCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexGrow: 1,
  },
}));

export default styles;
