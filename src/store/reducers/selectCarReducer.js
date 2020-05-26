import { SELECT_CAR, DESELECT_CAR } from "../actions/carsAction";

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case SELECT_CAR:
      return payload;

    case DESELECT_CAR:
      return initialState;

    default:
      return state
  }
}
