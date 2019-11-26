import { makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
  // Book Styles
  wrapper: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  indent: {
    textIndent: '2rem',
  },
  bookContainer: {
    position: 'relative',
    height: '100%',
    perspective: '1000px',
  },
  bookPage: {
    padding: '2rem',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    lineHeight: '2rem',
    height: '100%',

    '& p': {
      margin: 0,
    },
  },
  bookFrontPage: {
    left: 0,
    background: 'red',
  },
  bookSummary: {
    padding: '2rem',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    lineHeight: '2rem',
    height: '100%',

    '& p': {
      margin: 0,
    },
    background: 'red',
  },
  bookBackPage: { background: 'pink' },
  bookCover: {
    background: 'orangered',
  },
  bookControls: {
    display: 'flex',
  },
}));

export default styles;
