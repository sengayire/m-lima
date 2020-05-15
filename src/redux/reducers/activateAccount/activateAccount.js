import { activateAccountActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  console.log('active account', payload);

  switch (type) {
    case activateAccountActionsTypes.ACTIVATE_ACCOUNT_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case activateAccountActionsTypes.ACTIVATE_ACCOUNT_END:
      return {
        ...state,
        loading: false,
      };
    case activateAccountActionsTypes.ACTIVATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        payload,
        loading: false,
      };
    case activateAccountActionsTypes.ACTIVATE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return null;
  }
};
