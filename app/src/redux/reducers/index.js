import {combineReducers} from 'redux';
import {REQUEST_ARTICLE_SUCCEED, REQUEST_ARTICLES_SUCCEED} from "../actions"

const initialState = {
  articlesBody: {
    articles: [],
    pagination: {}
  },
  articleBody: {}
}

const articlesBody = (state = initialState.articlesBody, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES_SUCCEED:
      return action.body
    default:
      return state
  }
}

const articleBody = (state = initialState.articleBody, action) => {
  switch (action.type) {
    case REQUEST_ARTICLE_SUCCEED:
      return action.body
    default:
      return state
  }
}

const reducers = combineReducers({
  articlesBody: articlesBody,
  articleBody: articleBody
})

export default reducers