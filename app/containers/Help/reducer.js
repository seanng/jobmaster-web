/*
 *
 * Help reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
} from './constants';

const initialState = fromJS({
  view: 'faq'
});

function helpReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIEW:
      return state.set('view', action.view);
    default:
      return state;
  }
}

export default helpReducer;
