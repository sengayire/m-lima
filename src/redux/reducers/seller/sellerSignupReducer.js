import { sellerActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('here', payload);
  switch (type) {
    case sellerActionsTypes.SAVE_SELLER_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case sellerActionsTypes.SAVE_SELLER_END:
      return {
        ...state,
        loading: false,
      };
    case sellerActionsTypes.SAVE_SELLER_SUCCESS:
      return {
        ...state,
        payload,
      };
    case sellerActionsTypes.SAVE_SELLER_FAILURE:
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
