import { createSelector } from 'reselect';

/**
 * Directly select the myPosts substate from store
 */
const selectMyPostsDomain = () => (state) => state.get('myPosts');

// Get the view from the "myPosts" substate
const getView = () => createSelector(
  selectMyPostsDomain(),
  (substate) => {
    return substate.get('view')
  }
);

const getPosts = () => createSelector(
  selectMyPostsDomain(),
  (substate) => {
    return substate.get('posts')
  }
);

export {
  selectMyPostsDomain,
  getView,
  getPosts
};
