import {combineReducers} from 'redux';
import {REQUEST_ARTICLES_SUCCEED} from "../actions"

const initialState = {
  articlesBody: {
    articles: [],
    pagination: {}
  },
}

const articlesBody = (state = initialState.articlesBody, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES_SUCCEED:
      return action.body
    default:
      return state
  }
}

const reducers = combineReducers({
  articlesBody: articlesBody
})

export default reducers