import { buyerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/buyers',
      data: {
        ...formData,
      },
      onStart: buyerActionsTypes.SAVE_BUYER_START,
      onEnd: buyerActionsTypes.SAVE_BUYER_END,
      onSuccess: buyerActionsTypes.SAVE_BUYER_SUCCESS,
      onFailure: buyerActionsTypes.SAVE_BUYER_FAILURE,
    }),
    console.log('here man!'),
  );
