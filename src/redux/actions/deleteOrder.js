import { ordersActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(apiAction({
      method: 'delete',
      url: `/marketplace/api/order-details/${id}`,
      onStart: ordersActionsTypes.DELETE_ORDER_START,
      onEnd: ordersActionsTypes.DELETE_ORDER_END,
      onSuccess: ordersActionsTypes.DELETE_ORDER_SUCCESS,
      onFailure: ordersActionsTypes.DELETE_ORDER_FAILURE,
    }),);
