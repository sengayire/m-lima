import { orders as initialState } from '../../store/initialState';
import getAllOrders from './getAllOrders';

export default (state = initialState, action) => ({
  ...state,
  ...getAllOrders(state, action),
});
