import { buyerActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case buyerActionsTypes.SAVE_BUYER_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case buyerActionsTypes.SAVE_BUYER_END:
      return {
        ...state,
        loading: false,
      };
    case buyerActionsTypes.SAVE_BUYER_SUCCESS:
      return {
        ...state,
        payload,
        loading: false,
      };
    case buyerActionsTypes.SAVE_BUYER_FAILURE:
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
