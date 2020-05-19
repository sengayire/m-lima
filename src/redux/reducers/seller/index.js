import { seller as initialState } from '../../store/initialState';
import sellerSignupReducer from './sellerSignupReducer';
import newProduct from './newProduct';
import allProducts from './allProducts';

export default (state = initialState, action) => ({
  ...state,
  ...sellerSignupReducer(state, action),
  ...newProduct(state, action),
  ...allProducts(state, action),
});
