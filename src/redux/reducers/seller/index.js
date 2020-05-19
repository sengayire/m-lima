import { seller as initialState } from '../../store/initialState';
import sellerSignupReducer from './sellerSignupReducer';
import newProduct from './newProduct';
import allProducts from './allProducts';
import deleteProduct from './deleteProduct';

export default (state = initialState, action) => ({
  ...state,
  ...sellerSignupReducer(state, action),
  ...newProduct(state, action),
  ...allProducts(state, action),
  ...deleteProduct(state, action),
});
