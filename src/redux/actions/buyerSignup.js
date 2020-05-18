import { buyerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(apiAction({
      method: 'post',
      url: '/core/api/auth/signup',
      data: {
        ...formData,
      },
      onStart: buyerActionsTypes.BUYER_SIGNUP_START,
      onEnd: buyerActionsTypes.BUYER_SIGNUP_END,
      onSuccess: buyerActionsTypes.BUYER_SIGNUP_SUCCESS,
      onFailure: buyerActionsTypes.BUYER_SIGNUP_FAILURE,
    }),);
