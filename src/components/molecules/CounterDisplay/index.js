import React from 'react';
import styles from './styles.module.scss';

const CounterDisplay = ({timeData,clickCounterUser}) => {
  return (
    <div className={styles.counterDisplay} onMouseDown={clickCounterUser}>
      <h1>Timing</h1>
      <span>{timeData}</span>
    </div>
  );
};
export default CounterDisplay;