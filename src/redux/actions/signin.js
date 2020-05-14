import { signinActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/auth/signin',
      data: {
        ...formData,
      },
      onStart: signinActionsTypes.SIGNIN_START,
      onEnd: signinActionsTypes.SIGNIN_END,
      onSuccess: signinActionsTypes.SIGNIN_SUCCESS,
      onFailure: signinActionsTypes.SIGNIN_FAILURE,
    }),
  );
