import React, { Fragment, useState, useEffect } from 'react';
import { HeroSection, AboutSection } from './sections';
import rebecca from '../../assets/rebecca.png';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import styles from './styles';

const Home = () => {
  const classes = styles();

  return (
    <Fragment>
      <div className={classes.bgImage}></div>
      <HeroSection />
      <AboutSection />
    </Fragment>
  );
};

export default Home;
