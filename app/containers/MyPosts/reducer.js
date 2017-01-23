/*
 *
 * MyPosts reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
  SET_PARTICIPANT_LIST,
  SET_FILTER,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from './constants';


let tempPosts = [{
  id: 1,
  company: 'Genie',
  jobRole: 'Promoter',
  jobType: 'temporary',
  status: 'active',
  payment: '65',
  date: 'Tue Jan 18 2017',
  startTime: '12:00 PM',
  endTime: '6:00 PM',
  logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg',
  participants: [{
    id: 312,
    name: 'Sean Ng',
    status: 'active',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  },
  {
    id: 314,
    name: 'Mary Cheung',
    status: 'expired',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  }]
},
{
  id: 2,
  company: 'Genie',
  jobRole: 'Bouncer',
  jobType: 'temporary',
  status: 'expired',
  payment: '75',
  date: 'Mon Jan 17 2017',
  startTime: '12:00 PM',
  endTime: '6:00 PM',
  logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg',
  participants: [{
    id: 622,
    name: 'Owen Liu',
    status: 'active',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  },
  {
    id: 623,
    name: 'Kelvin Lo',
    status: 'expired',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  }]
}];

let permPosts = [{
  id: 1,
  company: 'Genie',
  jobRole: 'Promoter',
  jobType: 'permanent',
  status: 'active',
  payment: '105',
  date: 'Tue Jan 18 2017',
  logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg',
  participants: [{
    id: 392,
    name: 'Jameson Wong',
    status: 'active',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  },
  {
    id: 3884,
    name: 'Tiffany Chan',
    status: 'expired',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  }]
},
{
  id: 2,
  company: 'Genie',
  jobRole: 'Bouncer',
  jobType: 'permanent',
  status: 'expired',
  payment: '75',
  date: 'Mon Jan 17 2017',
  startTime: '12:00 PM',
  endTime: '6:00 PM',
  logo: 'https://s-media-cache-ak0.pinimg.com/originals/83/90/0a/83900a5b6d403ddbfd4e843ea70828f4.jpg',
  participants: [{
    id: 622,
    name: 'Owen Liu',
    status: 'active',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  },
  {
    id: 623,
    name: 'Kelvin Lo',
    status: 'expired',
    photo: 'http://static.comicvine.com/uploads/original/11111/111115170/3445548-4383058771-Avata.jpg'
  }]
}]

const initialState = fromJS({
  loading: false,
  error: false,
  view: 'temporary',
  loading: true,
  participantList: null,
  posts: false,
  filter: {
    startTime: '00:00',
    endTime: '23:59',
    status: 'all',
    search: ''
  }
});


function myPostsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('posts', false);

    case LOAD_POSTS_SUCCESS:
      console.log('action.posts', action.posts);
      return state
        .set('loading', false)
        .set('posts', action.posts);

    case LOAD_POSTS_ERROR:
      console.log('action.error', action.error);
      return state
        .set('loading', false)
        .set('error', action.error);

    case SWITCH_VIEW:
      const posts = action.view === 'temporary' ? tempPosts : permPosts;
      return state
        .merge({view: action.view, posts: posts});

    case SET_FILTER:
      const filterSubState = state.get('filter');
      return state
        .set('filter', filterSubState.set(action.key, action.value));

    case SET_PARTICIPANT_LIST:
      return state
        .set('participantList', action.participants);

    default:
      return state;
  }
}

export default myPostsReducer;
