import React from 'react';

import { AppBar, Toolbar, Hidden, withTheme } from '@material-ui/core';
import RMJamieson from '../../assets/RMJamieson';
import styles from './styles';

export const Header = ({ theme }) => {
  const classes = styles();

  return (
    <AppBar position="fixed" className={classes.header}>
      <Toolbar>
        <div>
          <RMJamieson color={theme.palette.white.main} />
        </div>

        <Hidden xsDown>
          <ul className={classes.titleDescription}>
            <li>Author</li>
            <li>Ghostwriter</li>
            <li>Entrepenuer</li>
          </ul>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default withTheme(Header);
