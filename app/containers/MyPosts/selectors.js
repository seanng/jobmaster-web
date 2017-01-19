import { createSelector } from 'reselect';

/**
 * Directly select the myPosts substate from store
 */
const selectMyPostsDomain = () => (state) => state.get('myPosts');

// Get the view from the "myPosts" substate
const getView = () => createSelector(
  selectMyPostsDomain(),
  (substate) => substate.get('view')
);

const getPosts = () => createSelector(
  selectMyPostsDomain(),
  (substate) => substate.get('posts')
);

const getParticipantList = () => createSelector(
  selectMyPostsDomain(),
  (substate) => substate.get('participantList')
);

export {
  selectMyPostsDomain,
  getView,
  getPosts,
  getParticipantList
};
