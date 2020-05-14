import { sellerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(apiAction({
      method: 'post',
      url: '/sellers',
      data: {
        ...formData,
      },
      onStart: sellerActionsTypes.SAVE_SELLER_START,
      onEnd: sellerActionsTypes.SAVE_SELLER_END,
      onSuccess: sellerActionsTypes.SAVE_SELLER_SUCCESS,
      onFailure: sellerActionsTypes.SAVE_SELLER_FAILURE,
    }),);
