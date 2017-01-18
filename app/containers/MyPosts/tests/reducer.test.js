
import { fromJS } from 'immutable';
import myPostsReducer from '../reducer';

describe('myPostsReducer', () => {
  it('returns the initial state', () => {
    expect(myPostsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
