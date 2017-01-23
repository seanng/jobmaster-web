import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import request from 'utils/request';
import { postsLoaded, postLoadingError } from './actions';
import { LOAD_POSTS } from './constants';

// Individual exports for testing (worker sagas)

export function* getPosts({page}) {
  console.log('getPosts params:', page);
  const requestURL = `http://api.gogenieapp.com/master/v5/jobs?page=${page}`;

  try {
    const posts = yield call(request, requestURL);
    yield put(postsLoaded(posts));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

// Root saga manages watcher lifecycle
export function* postsData () {
  const watcher = yield takeLatest(LOAD_POSTS, getPosts);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher)
}

// All sagas to be loaded
export default [
  postsData,
];
