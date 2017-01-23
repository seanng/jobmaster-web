/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_SUCCESS
} from './constants';

const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_SUCCESS:
      localStorage.token = action.resp.token;
      return state;

    default:
      return state;
  }
}

export default loginReducer;
