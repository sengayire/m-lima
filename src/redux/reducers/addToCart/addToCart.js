import { addToCartActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case addToCartActionsTypes.ADD_TO_CART_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case addToCartActionsTypes.ADD_TO_CART_END:
      return {
        ...state,
        loading: false,
      };
    case addToCartActionsTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case addToCartActionsTypes.ADD_TO_CART_FAILURE:
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
