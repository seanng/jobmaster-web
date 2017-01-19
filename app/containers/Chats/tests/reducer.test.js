
import { fromJS } from 'immutable';
import chatsReducer from '../reducer';

describe('chatsReducer', () => {
  it('returns the initial state', () => {
    expect(chatsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
