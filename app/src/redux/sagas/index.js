import {takeLatest, all, put, call} from 'redux-saga/effects'
import {REQUEST_ARTICLE, REQUEST_ARTICLES, requestArticlesSucceed, requestArticleSucceed} from "../actions";

const requestArticles = function* (action) {
  const response = yield call(fetch, action.apiUrl)
  const body = yield call([response, 'json']);
  yield put(requestArticlesSucceed(body))
};

const requestArticle = function* (action) {
  const response = yield call(fetch, action.apiUrl)
  const body = yield call([response, 'json']);
  yield put(requestArticleSucceed(body))
};


export function* requests() {
  yield takeLatest(REQUEST_ARTICLES, requestArticles)
  yield takeLatest(REQUEST_ARTICLE, requestArticle)
}


export default function* rootSaga() {
  yield all([requests()])
}



