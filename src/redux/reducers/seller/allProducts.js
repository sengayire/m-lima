import { sellerActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case sellerActionsTypes.GET_SELLER_PRODUCTS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case sellerActionsTypes.GET_SELLER_PRODUCTS_END:
      return {
        ...state,
        loading: false,
      };
    case sellerActionsTypes.GET_SELLER_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload.content,
      };
    case sellerActionsTypes.GET_SELLER_PRODUCTS_FAILURE:
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
