import {
  SWITCH_VIEW,
  SET_PARTICIPANT_LIST,
  SET_FILTER,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR
} from './constants';

function loadPosts(page) {
  return {
    type: LOAD_POSTS,
    page
  }
}

function postsLoaded(posts) {
  return {
    type: LOAD_POSTS_SUCCESS,
    posts
  }
}

function postLoadingError(error) {
  return {
    type: LOAD_POSTS_ERROR,
    error
  }
}

function switchView(view) {
  return {
    type: SWITCH_VIEW,
    view
  };
}

function setParticipantList(participants) {
  return {
    type: SET_PARTICIPANT_LIST,
    participants
  }
}

function setFilter(key, value) {
  return {
    type: SET_FILTER,
    key,
    value
  }
}

export {
  switchView,
  setParticipantList,
  setFilter,
  postsLoaded,
  loadPosts,
  postLoadingError
}