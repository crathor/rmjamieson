import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  flipContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    perspective: '1000px',
  },

  flipSide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transition: theme.transitions.create(['all'], {
      duration: 1000,
    }),
  },
  flipSideTwo: {
    transform: 'rotateY(180deg)',
  },
  flipBackSide: {
    transform: 'rotateY(0deg)',
  },
  flipFrontSide: {
    transform: 'rotateY(-180deg)',
  },
  flipSideOne: {},
}));

export default styles;
