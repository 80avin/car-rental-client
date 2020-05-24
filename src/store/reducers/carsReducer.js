import {ADD_CARS} from '../actions/carsAction';

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_CARS:
    return [ ...state, ...payload ]

  default:
    return state
  }
}
