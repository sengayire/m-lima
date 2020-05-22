import { addToCart as initialState } from '../../store/initialState';
import addToCart from './addToCart';

export default (state = initialState, action) => ({
  ...state,
  ...addToCart(state, action),
});
