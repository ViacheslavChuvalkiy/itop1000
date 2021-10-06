import {React, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Counter from "./component";
import {formatTime} from "../../../Utils";
import * as actions from "../../../store/actions";

const CounterContainer = () => {

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
      <Counter
        timeData = {timeData}
        clickCounterUser = {clickCounterUser}
        buttons = {buttons}
      />
  );
};
export const container = CounterContainer;