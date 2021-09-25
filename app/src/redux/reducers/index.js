import {combineReducers} from 'redux';
import {SAID_SOMETHING_SUCCEED} from "../actions"


//*****************
const initialState = {
  something: "",
}

const saySomething = (state = initialState.something, action)=> {
  switch (action.type) {
    case SAID_SOMETHING_SUCCEED:
      return action.message
    default:
      return state
  }
}
//*****************

const reducers = combineReducers({
  saySomething: saySomething
})

export default reducers