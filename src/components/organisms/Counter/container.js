import {React} from "react";
import {useSelector, useDispatch} from "react-redux";
import Counter from "./component";
import {formatTime} from "../../../Utils";
import {incrementCounter, stopCounter, clickUser, startCounter} from "../../../store/actions";

const CounterContainer = () => {
  const dispatch = useDispatch();
  let counterData = useSelector((state) => state.counterReducer.counterData);
  let timeLastClick = useSelector((state) => state.counterReducer.timeLastClick);
  let isCounterStarted = useSelector((state) => state.counterReducer.isCounterStarted);
  let timeData = formatTime(counterData);
  const incrementCounterData = () => {
    if (!isCounterStarted) {
      dispatch(startCounter());
      setTimeout(function run() {
        dispatch(incrementCounter(counterData++));
        if (isCounterStarted) {
          setTimeout(run, 1000)
        }
      }, 1000);
    }
  };
  const stopCounterData = () => {
    if (isCounterStarted) {
      clearTimeout(counterData);
      dispatch(stopCounter(false));
    }
  };
  const resetCounter = () => {
    if (isCounterStarted) {
      stopCounterData();
      incrementCounterData();
    }
  };
  const clickCounterUser = () => {
    if (isCounterStarted && timeLastClick && new Date().getTime() - timeLastClick <= 300) {
      stopCounter();
      dispatch(clickUser(null));
    } else {
      dispatch(clickUser(new Date().getTime()));
    }
  };
  const buttons = [
    {
      styleClass: 'btnStart',
      btnAction: incrementCounterData,
      btnName: 'Start'
    },
    {
      styleClass: 'btnStop',
      btnAction: stopCounterData,
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
      timeData={timeData}
      clickCounterUser={clickCounterUser}
      buttons={buttons}
    />
  );
};
export const container = CounterContainer;