import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import requestWithToken from 'utils/tokenAuthRequest'
import { loginSuccess, loginError } from './actions';
import { LOGIN } from './constants';

// Individual exports for testing
export function* loginSaga({email, password}) {
  // const requestURL = `http://api.gogenieapp.com/master_auth/sign_in`;

  // let options = {
  //   method: 'POST',
  //   body: { email, password },
  //   headers: {
  //     // NEED ACCESS-TOKEN AND COOKIE STUFF !!
  //   }
  // }

  try {
    const posts = yield call(requestWithToken, email, password);
    yield put(loginSuccess(resp))
  } catch (err) {
    yield put(loginError(err))
  }

}

export function* loginWatcher() {
  const watcher = yield takeLatest(LOGIN, loginSaga);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  loginWatcher,
];
