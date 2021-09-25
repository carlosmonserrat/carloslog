import {delay, takeLatest, all, put} from 'redux-saga/effects'
import {SAY_SOMETHING, saySomethingSucceed} from "../actions";

const saySomethingAsync = function* (action) {
  try {
    yield delay(500);
    yield put(saySomethingSucceed(action.message))
    action.formik.setErrors({
      email: "CACA email",
      password: "CACA password"
    });
  } catch (error) {
    action.formik.setErrors({
      email: "CACA email",
      password: "CACA password"
    });
  } finally {
    action.formik.setSubmitting(false);
  }
};

export function* watchSay() {
  yield takeLatest(SAY_SOMETHING, saySomethingAsync)
}

export default function* rootSaga() {
  yield all([watchSay()])
}



