import { createSelector } from 'reselect';

/**
 * Direct selector to the createPost state domain
 */
const selectCreatePostDomain = () => (state) => state.get('createPost');

const makeSelectCreatePost = () => createSelector(
  selectCreatePostDomain(),
  (substate) => substate.toJS()
);

const getFormType = () => createSelector(
  selectCreatePostDomain(),
  (substate) => substate.get('formType')
);

export {
  selectCreatePostDomain,
  getFormType
};
