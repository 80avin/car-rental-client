import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import carsReducer from './carsReducer'

const reducers = combineReducers({
  user:userReducer,
  cars:carsReducer,
});

export default reducers;