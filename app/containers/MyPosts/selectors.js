import { createSelector } from 'reselect';

/**
 * Directly select the myPosts substate from store
 */
const selectMyPostsDomain = () => (state) => state.get('myPosts');

// Get the view from the "myPosts" substate
const getView = () => createSelector(
  selectMyPostsDomain(),
  (substate) => {
    console.log('the new view.', substate.get('view'))
    return substate.get('view')
  }
);

export {
  selectMyPostsDomain,
  getView
};
