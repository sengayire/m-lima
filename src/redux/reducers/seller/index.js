import { user as initialState } from '../../store/initialState';
import sellerSignupReducer from './sellerSignupReducer';

export default (state = initialState, action) => ({
  ...state,
  ...sellerSignupReducer(state, action),
});
