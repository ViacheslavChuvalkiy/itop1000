export function incrementCounter(value) {
  return {type: "INCREMENT_COUNTER", counterData: value}
}
export function stopCounter() {
  return {type: "COUNTER_STOP"}
}
export function counterReset() {
  return {type: "COUNTER_RESET"}
}
export function clickUser(value) {
  return {type: "CLICK_USER", timeClick: value}
}
export function getTimerData() {
  return {type: "GET_COUNTER_DATA"}
}
export const clickCounterReset = () => async (dispatch) => {
  dispatch(counterReset());
  dispatch(incrementCounter(0));
};

