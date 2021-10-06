const initialState =
  {
    counterData: 0,
    timeLastClick: null,
    isCounterStarted: false,
  };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      console.log('action.counterData',action.counterData)
      return {
        ...state,
        counterData: action.counterData,
        isCounterStarted: true,
      };
    case 'COUNTER_STOP':
      return {
        ...state,
        isCounterStarted: false,
      };
    case 'GET_COUNTER_DATA':
      return {
        ...state
      };
    case 'COUNTER_RESET':
      return {
        ...state,
        counterData: 0,
        isCounterStarted: false,
      };
    case 'CLICK_USER':
      return {
        ...state,
        timeLastClick: action.timeClick,
      };
    default:
      return state;
  }
}
export default counterReducer;
