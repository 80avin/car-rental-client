import { BOOKING_REQUEST_STATUS } from "../actions/bookingsAction";

const initialState = 'loading'

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case BOOKING_REQUEST_STATUS:
    return payload;

  default:
    return state
  }
}
