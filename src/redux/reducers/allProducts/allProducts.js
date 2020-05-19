import { productsActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case productsActionsTypes.GET_ALL_PRODUCTS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case productsActionsTypes.GET_ALL_PRODUCTS_END:
      return {
        ...state,
        loading: false,
      };
    case productsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.content,
        loading: false,
      };
    case productsActionsTypes.GET_ALL_PRODUCTS_FAILURE:
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
