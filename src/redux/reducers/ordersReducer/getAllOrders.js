import { ordersActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case ordersActionsTypes.GET_ALL_ORDERS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case ordersActionsTypes.GET_ALL_ORDERS_END:
      return {
        ...state,
        loading: false,
      };
    case ordersActionsTypes.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        items: payload.data.result,
        loading: false,
      };
    case ordersActionsTypes.GET_ALL_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.message,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return null;
  }
};
