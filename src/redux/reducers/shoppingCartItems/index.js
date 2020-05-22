import { cartItems as initialState } from '../../store/initialState';
import shoppingCartItems from './shoppingCartItems';

export default (state = initialState, action) => ({
  ...state,
  ...shoppingCartItems(state, action),
});
