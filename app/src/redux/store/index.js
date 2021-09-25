import {applyMiddleware, createStore} from "redux";
import reducers from "../reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;