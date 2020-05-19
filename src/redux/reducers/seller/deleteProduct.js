import { productsActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('deletd ===>', payload);

  switch (type) {
    case productsActionsTypes.DELETE_PRODUCT_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case productsActionsTypes.DELETE_PRODUCT_END:
      return {
        ...state,
        loading: false,
      };
    case productsActionsTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        payload,
      };
    case productsActionsTypes.DELETE_PRODUCT_FAILURE:
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
