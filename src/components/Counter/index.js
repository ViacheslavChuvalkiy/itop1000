import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as actions from '../../store/actions/';
import styles from './styles.module.scss';
import CounterDisplay from "../CounterDisplay";
import Button from "../Button";
import {formatTime} from "../../Utils";

const Counter = () => {

  const dispatch = useDispatch();
  let counterData = useSelector((state) => state.counterReducer.counterData);
  let timeLastClick = useSelector((state) => state.counterReducer.timeLastClick);
  let isCounterStarted = useSelector((state) => state.counterReducer.isCounterStarted);
  let timeData = formatTime(counterData);

  const incrementCounter = () => {
    if(!isCounterStarted) {
      setTimeout(function run() {
        counterData++;
        dispatch(actions.incrementCounter(counterData));
        setTimeout(run, 1000);
      }, 1000);
    }
  };

  const stopCounter = () => {
    if(isCounterStarted){
      clearTimeout(counterData);
      dispatch(actions.stopCounter());
    }
  };

  const resetCounter = () => {
    if(isCounterStarted){
      clearTimeout(counterData);
      dispatch(actions.clickCounterReset(dispatch));
    }
  };

  const clickCounterUser = () => {
    if(isCounterStarted && timeLastClick && new Date().getTime() -timeLastClick <= 300){
      stopCounter();
      dispatch(actions.clickUser(null));
    }
    else {
      dispatch(actions.clickUser(new Date().getTime()));
    }
  };

  useEffect(() => {
    dispatch(actions.getTimerData());
  }, [dispatch]);

  const buttons = [
    {
      styleClass: 'btnStart',
      btnAction: incrementCounter,
      btnName: 'Start'
    },
    {
      styleClass: 'btnStop',
      btnAction: stopCounter,
      btnName: 'Stop'
    },
    {
      styleClass: 'btnReset',
      btnAction: resetCounter,
      btnName: 'Reset'
    },
  ];

  return (
    <div className={styles.counterBlock}>
      <CounterDisplay
        timeData = {timeData}
        clickCounterUser = {clickCounterUser}
      />
      <div className={styles.counterButtons}>
        {buttons.map((item, index) => (
          <Button
            key={index}
            styleClass = {item.styleClass}
            btnAction = {item.btnAction}
            btnName = {item.btnName}
          />
        ))}
      </div>
    </div>
  );
}
export default Counter;