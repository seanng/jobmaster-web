/*
 *
 * CreatePost actions
 *
 */

import {
  SET_FORM_TYPE,
} from './constants';

export function setFormType(jobType) {
  return {
    type: SET_FORM_TYPE,
    jobType
  };
}
