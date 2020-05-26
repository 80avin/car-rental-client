import { SET_CURRENT_BOOKING, UNSET_CURRENT_BOOKING } from "../actions/bookingsAction";

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_CURRENT_BOOKING:
      return [...payload]
    case UNSET_CURRENT_BOOKING:
      return initialState;
    default:
      return state
  }
}
