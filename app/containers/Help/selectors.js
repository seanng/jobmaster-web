import { createSelector } from 'reselect';

const selectHelpDomain = () => (state) => state.get('help');

const getView = () => createSelector(
  selectHelpDomain(),
  (substate) => substate.get('view')
);

export {
  getView,
};
