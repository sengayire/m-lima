import { buyerActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('payload', payload);
  switch (type) {
    case buyerActionsTypes.SAVE_BUYER_START:
      return {
        ...state,
        signup: {
          message: '',
          loading: true,
          errors: {},
        },
      };
    case buyerActionsTypes.SAVE_BUYER_END:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
        },
      };
    case buyerActionsTypes.SAVE_BUYER_SUCCESS:
      return {
        ...state,
        profile: payload.user,
        signup: {
          loading: false,
          message: payload.message,
          errors: {},
        },
      };
    case buyerActionsTypes.SAVE_BUYER_FAILURE:
      return {
        ...state,
        signup: {
          loading: false,
          message: payload.message,
          errors: {
            ...payload.errors,
          },
        },
      };
    default:
      return null;
  }
};
