/*
 *
 * MyPosts actions
 *
 */

import {
  SWITCH_VIEW,
  SET_PARTICIPANT_LIST,
  SET_FILTER
} from './constants';

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
  setFilter
}