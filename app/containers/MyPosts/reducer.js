/*
 *
 * MyPosts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
} from './constants';

const initialState = fromJS({
  view: 'temporary'
});

function myPostsReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIEW:
      return state
        .set('view', action.view);
    default:
      return state;
  }
}

export default myPostsReducer;
