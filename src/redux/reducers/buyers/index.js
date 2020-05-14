import { buyers as initialState } from '../../store/initialState';
import saveBuyersReducer from './saveBuyersReducer';

export default (state = initialState, action) => ({
  ...state,
  ...saveBuyersReducer(state, action),
});
