import React from 'react';
import styles from './styles.module.scss';
import CounterDisplay from "../../molecules/CounterDisplay";
import Button from "../../atoms/Button";

const Counter = ({timeData, clickCounterUser, buttons}) => {
  return (
    <div className={styles.counterBlock}>
      <CounterDisplay
        timeData={timeData}
        clickCounterUser={clickCounterUser}
      />
      <div className={styles.counterButtons}>
        {buttons.map((item, index) => (
          <Button
            key={index}
            styleClass={item.styleClass}
            btnAction={item.btnAction}
            btnName={item.btnName}
          />
        ))}
      </div>
    </div>
  );
}
export default Counter;
