import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import styles from './styles';
import rebecca from '../../../../assets/rebecca.png';
const AboutSection = () => {
  const classes = styles();

  return (
    <section className={classes.authorSection}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={12} md={6}>
            <div className={classes.authorCard}>
              <img
                src={rebecca}
                alt="Rebecca Jamieson"
                className={classes.authorImage}
              />
            </div>
          </Grid>
          <Grid item container sm={12} md={6}>
            <Grid item xs={12}>
              <Card className={classes.aboutCard}>
                <CardContent className={classes.aboutCardContent}>
                  <Typography variant="h4" gutterBottom>
                    Who Am I
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat aliquam odio, optio quidem labore pariatur alias?
                    Necessitatibus blanditiis vel dolorum, quasi minima eos
                    exercitationem consequuntur voluptates ab magnam voluptatum?
                    Assumenda officia ipsa eos voluptas maiores dolorem alias ex
                    sequi fugiat. Exercitationem laboriosam et laborum ex
                    perferendis sequi perspiciatis temporibus asperiores!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.aboutCard}>
                <CardContent className={classes.aboutCardContent}>
                  <Typography variant="h4" gutterBottom>
                    My Alter Ego
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat aliquam odio, optio quidem labore pariatur alias?
                    Necessitatibus blanditiis vel dolorum, quasi minima eos
                    exercitationem consequuntur voluptates ab magnam voluptatum?
                    Assumenda officia ipsa eos voluptas maiores dolorem alias ex
                    sequi fugiat. Exercitationem laboriosam et laborum ex
                    perferendis sequi perspiciatis temporibus asperiores!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card className={classes.aboutCard}>
                <CardContent className={classes.aboutCardContent}>
                  <Typography variant="h4" gutterBottom>
                    Fun Facts!
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat aliquam odio, optio quidem labore pariatur alias?
                    Necessitatibus blanditiis vel dolorum, quasi minima eos
                    exercitationem consequuntur voluptates ab magnam voluptatum?
                    Assumenda officia ipsa eos voluptas maiores dolorem alias ex
                    sequi fugiat. Exercitationem laboriosam et laborum ex
                    perferendis sequi perspiciatis temporibus asperiores!
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutSection;
