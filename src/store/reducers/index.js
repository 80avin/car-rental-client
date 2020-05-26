import {combineReducers} from 'redux';
import userReducer from "./userReducer";
import carsReducer from './carsReducer';
import selectCarReducer from './selectCarReducer'
import currentBookingReducer from './currentBookingReducer'
import bookingRequestStatusReducer from './bookingRequestStatusReducer'
import newbookingStatusReducer from './newbookingStatusReducer';

const reducers = combineReducers({
  user:userReducer,
  cars:carsReducer,
  selectedCar:selectCarReducer,
  currentBooking:currentBookingReducer,
  bookingRequestStatus:bookingRequestStatusReducer,
  newBookingStatus:newbookingStatusReducer,
});

export default reducers;