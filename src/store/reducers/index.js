import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'

const reducers = combineReducers({
  counterReducer,
});

export default reducers