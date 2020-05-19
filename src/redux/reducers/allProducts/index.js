import { products as initialState } from '../../store/initialState';
import allProducts from './allProducts';

export default (state = initialState, action) => ({
  ...state,
  ...allProducts(state, action),
});
