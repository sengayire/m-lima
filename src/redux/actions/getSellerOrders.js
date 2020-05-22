import { sellerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/marketplace/api/order-details/seller-id/${id}`,
      onStart: sellerActionsTypes.GET_SELLER_ORDERS_START,
      onEnd: sellerActionsTypes.GET_SELLER_ORDERS_END,
      onSuccess: sellerActionsTypes.GET_SELLER_ORDERS_SUCCESS,
      onFailure: sellerActionsTypes.GET_SELLER_ORDERS_FAILURE,
    }),
  );
