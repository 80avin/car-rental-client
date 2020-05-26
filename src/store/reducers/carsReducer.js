import {SET_CARS, REMOVE_CARS} from '../actions/carsAction';

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_CARS:
    return [...payload ];
  case REMOVE_CARS:
    return initialState;
  default:
    return state
  }
}
