import React, { useEffect, useState } from 'react';
import styles from './styles';

const FlipCard = ({ front, back, flip = false, delay = 0 }) => {
  const classes = styles();

  const [flipCard, setFlipCard] = useState(flip);
  const sideOneClasses = [classes.flipSide, classes.flipSideOne];
  const sideTwoClasses = [classes.flipSide, classes.flipSideTwo];

  useEffect(() => {
    setTimeout(() => {
      setFlipCard(flip);
    }, delay);
  }, [flip, flipCard]);

  if (flipCard) {
    sideOneClasses.push(classes.flipFrontSide);
    sideTwoClasses.push(classes.flipBackSide);
  }

  return (
    <div className={classes.flipContainer}>
      <div className={sideOneClasses.join(' ')}>{front}</div>
      <div className={sideTwoClasses.join(' ')}>{back}</div>
    </div>
  );
};

export default FlipCard;
