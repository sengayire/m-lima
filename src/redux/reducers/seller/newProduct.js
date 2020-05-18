import { productsActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('new production', payload);

  switch (type) {
    case productsActionsTypes.CREATE_NEW_PRODUCT_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case productsActionsTypes.CREATE_NEW_PRODUCT_END:
      return {
        ...state,
        loading: false,
      };
    case productsActionsTypes.CREATE_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        payload,
      };
    case productsActionsTypes.CREATE_NEW_PRODUCT_FAILURE:
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
