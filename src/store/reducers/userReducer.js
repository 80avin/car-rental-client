// TODO import action types
import {SIGNIN_SUCCESS, SIGNOUT} from '../actions/userActions'
const initialState = {user:null, token:''};

const userReducer = (state=initialState, action) => {
  switch(action.type){
    case SIGNIN_SUCCESS:
      return action.payload;
      case SIGNOUT:
        return initialState;
    default:
      return state;
  }
};

export default userReducer;