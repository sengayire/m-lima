import { ordersActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: '/marketplace/api/orders',
      onStart: ordersActionsTypes.GET_ALL_ORDERS_START,
      onEnd: ordersActionsTypes.GET_ALL_ORDERS_END,
      onSuccess: ordersActionsTypes.GET_ALL_ORDERS_SUCCESS,
      onFailure: ordersActionsTypes.GET_ALL_ORDERS_FAILURE,
    }),
  );
