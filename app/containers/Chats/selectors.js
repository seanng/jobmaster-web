import { createSelector } from 'reselect';

/**
 * Direct selector to the chats state domain
 */
const selectChatsDomain = () => (state) => state.get('chats');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Chats
 */

const makeSelectChats = () => createSelector(
  selectChatsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectChats;
export {
  selectChatsDomain,
};
