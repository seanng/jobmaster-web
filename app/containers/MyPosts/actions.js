/*
 *
 * MyPosts actions
 *
 */

import {
  SWITCH_VIEW,
} from './constants';

export function switchView(view) {
  console.log('this is the view', view);
  return {
    type: SWITCH_VIEW,
    view
  };
}
