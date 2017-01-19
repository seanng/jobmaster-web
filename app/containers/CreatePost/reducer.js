/*
 *
 * CreatePost reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_FORM_TYPE,
} from './constants';

const initialState = fromJS({
  formType: null
});

function createPostReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_TYPE:
      return state
        .set('formType', action.jobType);
    default:
      return state;
  }
}

export default createPostReducer;
