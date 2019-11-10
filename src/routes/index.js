import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages';
import { Header } from '../components';
import styles from './styles';

const Shell = ({ children }) => {
  const classes = styles();
  return <div className={classes.shell}>{children}</div>;
};

export default () => (
  <Shell>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Shell>
);
