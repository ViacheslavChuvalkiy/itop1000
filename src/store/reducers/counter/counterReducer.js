import {INCREMENT_COUNTER, COUNTER_STOP, CLICK_USER, COUNTER_START} from '../../actions/actionTypes';

const initialState =
  {
    counterData: 0,
    timeLastClick: null,
    isCounterStarted: false,
  };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      console.log('hfp',state)
      return {
        ...state,
        counterData: action.counterData,
        isCounterStarted: true,
      };
    case COUNTER_STOP:
      console.log(state)
      return {
        ...state,
        isCounterStarted: action.isCounterStarted,
      };
    case COUNTER_START:
      return {
        ...state,
        counterData: 0,
        isCounterStarted: true,
      };
    case CLICK_USER:
      return {
        ...state,
        timeLastClick: action.timeClick,
      };
    default:
      return state;
  }
}
export default counterReducer;
