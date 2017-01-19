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
  view: 'temporary',
  posts: [{
    company: 'Genie',
    jobRole: 'Promoter',
    jobType: 'temporary',
    status: 'active',
    payment: '65',
    date: 'Tue Jan 18 2017',
    startTime: '12:00 PM',
    endTime: '6:00 PM',
    logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg'
  },
  {
    company: 'Genie',
    jobRole: 'Bouncer',
    jobType: 'temporary',
    status: 'expired',
    payment: '75',
    date: 'Mon Jan 17 2017',
    startTime: '12:00 PM',
    endTime: '6:00 PM',
    logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg'
  }]
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
