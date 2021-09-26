import {takeLatest, all, put, call} from 'redux-saga/effects'
import {REQUEST_ARTICLES, requestArticlesSucceed} from "../actions";

const requestArticles = function* (action) {
  const response = yield call(fetch, action.apiUrl)
  const body = yield call([response, 'json']);
  yield put(requestArticlesSucceed(body))
};

export function* requests() {
  yield takeLatest(REQUEST_ARTICLES, requestArticles)
}

export default function* rootSaga() {
  yield all([requests()])
}



