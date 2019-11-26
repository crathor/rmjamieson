import React, { Fragment } from 'react';
import { HeroSection, AboutSection } from './sections';

import { Container, Typography } from '@material-ui/core';
import { Book } from '../../components';
import styles from './styles';
import chapters from './excerpts';

const Home = () => {
  const classes = styles();

  return (
    <Fragment>
      <div className={classes.bgImage}></div>
      <HeroSection />
      <AboutSection />
      <section className={classes.excerptSection}>
        <Container className={classes.excerptContainer}>
          <Book
            content={chapters.jack.chapterOne.text}
            title={chapters.jack.title}
            summary={chapters.jack.summary}
          />
        </Container>
      </section>
    </Fragment>
  );
};

export default Home;
