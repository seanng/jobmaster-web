/*
 *
 * MyPosts actions
 *
 */

import {
  SWITCH_VIEW,
  SET_PARTICIPANT_LIST
} from './constants';

export function switchView(view) {
  return {
    type: SWITCH_VIEW,
    view
  };
}

export function setParticipantList(participants) {
  return {
    type: SET_PARTICIPANT_LIST,
    participants
  }
}
