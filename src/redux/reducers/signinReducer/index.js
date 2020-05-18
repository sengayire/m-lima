import { signin as initialState } from '../../store/initialState';
import signinReducer from './signinReducer';

export default (state = initialState, action) => ({
  ...state,
  ...signinReducer(state, action),
});
