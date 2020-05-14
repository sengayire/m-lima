import { buyerActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case buyerActionsTypes.BUYER_SIGNUP_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case buyerActionsTypes.BUYER_SIGNUP_END:
      return {
        ...state,
        loading: false,
      };
    case buyerActionsTypes.BUYER_SIGNUP_SUCCESS:
      return {
        ...state,
        payload,
        loading: false,
      };
    case buyerActionsTypes.BUYER_SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        message: 'User already exist',
        errors: {
          ...payload.errors,
        },
      };
    default:
      return state;
  }
};
