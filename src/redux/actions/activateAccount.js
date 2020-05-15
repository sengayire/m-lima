import { activateAccountActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(apiAction({
      method: 'post',
      url: '/auth/activate-account',
      data: {
        ...formData,
      },
      onStart: activateAccountActionsTypes.ACTIVATE_ACCOUNT_START,
      onEnd: activateAccountActionsTypes.ACTIVATE_ACCOUNT_END,
      onSuccess: activateAccountActionsTypes.ACTIVATE_ACCOUNT_SUCCESS,
      onFailure: activateAccountActionsTypes.ACTIVATE_ACCOUNT_FAILURE,
    }),);
