import { activateAccount as initialState } from '../../store/initialState';
import activateAccount from './activateAccount';

export default (state = initialState, action) => ({
  ...state,
  ...activateAccount(state, action),
});
