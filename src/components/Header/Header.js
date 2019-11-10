import React, { Fragment } from 'react';

import { AppBar, Toolbar, Hidden, withTheme } from '@material-ui/core';
import RMJamieson from '../../assets/RMJamieson';
import styles from './styles';

const Spacer = () => {
  const classes = styles();

  return <div className={classes.spacer}></div>;
};

export const Header = ({ theme }) => {
  const classes = styles();

  return (
    <Fragment>
      <AppBar position="fixed">
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
    </Fragment>
  );
};

export default withTheme(Header);
