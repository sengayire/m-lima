import { getShoppingCartItems } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(apiAction({
      method: 'get',
      url: `marketplace/api/orders/buyer-id/${id}/status/SHOPPING`,
      onStart: getShoppingCartItems.GET_SHOPPING_CART_ITEMS_START,
      onEnd: getShoppingCartItems.GET_SHOPPING_CART_ITEMS_END,
      onSuccess: getShoppingCartItems.GET_SHOPPING_CART_ITEMS_SUCCESS,
      onFailure: getShoppingCartItems.GET_SHOPPING_CART_ITEMS_FAILURE,
    }),);
