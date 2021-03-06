import React, { useEffect, useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { FlipCard, LineAwesome } from '../../../../components';
import styles from './styles';

const HeroSection = () => {
  const classes = styles();
  const [addFlip, setAddFlip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddFlip(true);
    }, 2000);
  });

  return (
    <section className={classes.hero}>
      <Container className={classes.heroContainer}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.heroGrid}
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4} className={classes.heroGridItem}>
            <FlipCard
              flip={addFlip}
              delay={0}
              front={
                <Card
                  className={[classes.hookCard, classes.hookCardFront].join(
                    ' ',
                  )}
                >
                  <CardContent className={classes.frontCard}>
                    <LineAwesome icon="pen-fancy" className={classes.icon} />
                  </CardContent>
                </Card>
              }
              back={
                <Card className={classes.hookCard}>
                  <CardContent>
                    <header className={classes.hookCardHeader}>
                      <Typography variant="h3" className={classes.cardTitle}>
                        Author
                      </Typography>
                      <LineAwesome
                        icon="pen-fancy"
                        className={classes.iconBack}
                      />
                    </header>
                    <Typography gutterBottom variant="h6">
                      My current WIP is 'Jack: Rise of Faerie'
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quasi ad deleniti asperiores eum quidem corrupti
                      magni accusamus minus quaerat, saepe, error sunt maxime,
                      voluptatibus veritatis totam temporibus nemo consequuntur
                      perspiciatis perferendis. Omnis dicta ratione quaerat at
                      nisi sed! Maiores distinctio dolores beatae ratione
                      laudantium fugiat exercitationem, velit tempora facilis.
                    </Typography>
                  </CardContent>
                </Card>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.heroGridItem}>
            <FlipCard
              flip={addFlip}
              delay={150}
              front={
                <Card
                  className={[classes.hookCard, classes.hookCardFront].join(
                    ' ',
                  )}
                >
                  <CardContent className={classes.frontCard}>
                    <LineAwesome icon="ghost" className={classes.icon} />
                  </CardContent>
                </Card>
              }
              back={
                <Card className={classes.hookCard}>
                  <CardContent>
                    <header className={classes.hookCardHeader}>
                      <Typography variant="h3" className={classes.cardTitle}>
                        Ghostwriter
                      </Typography>
                      <LineAwesome icon="ghost" className={classes.iconBack} />
                    </header>
                    <Typography gutterBottom variant="h6">
                      Over 70 books written
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nihil dolore magni atque ullam cum aliquam debitis nostrum
                      unde sunt quaerat fuga alias tenetur doloremque inventore
                      eligendi quisquam voluptates, pariatur a id voluptatibus!
                      Voluptate maiores necessitatibus neque quaerat aut fugiat
                      ea! Necessitatibus temporibus exercitationem commodi,
                      accusamus neque dicta vel. Magnam, reprehenderit.
                    </Typography>
                  </CardContent>
                </Card>
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.heroGridItem}>
            <FlipCard
              flip={addFlip}
              delay={300}
              front={
                <Card
                  className={[classes.hookCard, classes.hookCardFront].join(
                    ' ',
                  )}
                >
                  <CardContent className={classes.frontCard}>
                    <LineAwesome icon="dragon" className={classes.icon} />
                  </CardContent>
                </Card>
              }
              back={
                <Card className={classes.hookCard}>
                  <CardContent>
                    <header className={classes.hookCardHeader}>
                      <Typography variant="h3" className={classes.cardTitle}>
                        Entrepenur
                      </Typography>
                      <LineAwesome icon="dragon" className={classes.iconBack} />
                    </header>
                    <Typography gutterBottom variant="h6">
                      I also provide Editing and Screen Writing
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Iste suscipit explicabo amet eum dolores fugiat sunt
                      consectetur laboriosam ex, reprehenderit illum
                      consequuntur nulla cum tempora, exercitationem eius alias
                      at necessitatibus omnis nostrum, temporibus et dolorem.
                      Cumque minus dignissimos non sed, impedit ducimus
                      deserunt? Asperiores quos modi dolores nulla error sit.
                    </Typography>
                  </CardContent>
                </Card>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
