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
}));

export default styles;
