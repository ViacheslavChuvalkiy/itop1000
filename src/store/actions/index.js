import {INCREMENT_COUNTER, COUNTER_STOP, CLICK_USER, COUNTER_START} from './actionTypes';

export function incrementCounter(value) {
  return {type: INCREMENT_COUNTER, counterData: value}
}
export function stopCounter(value) {
  return {type: COUNTER_STOP, isCounterStarted: value}
}
export function startCounter() {
  return {type: COUNTER_START}
}
export function clickUser(value) {
  return {type: CLICK_USER, timeClick: value}
}


