import { seller as initialState } from '../../store/initialState';
import sellerSignupReducer from './sellerSignupReducer';
import newProduct from './newProduct';

export default (state = initialState, action) => ({
  ...state,
  ...sellerSignupReducer(state, action),
  ...newProduct(state, action),
});
