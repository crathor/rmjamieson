import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  flipContainer: {
    position: 'relative',
    display: 'inline-block',
    perspective: '1000px',
    height: '100%',
    width: '100%',
  },

  flipSide: {
    height: '100%',
    width: '100%',
    position: 'absolute',
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
