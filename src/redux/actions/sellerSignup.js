import { sellerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default ({ form, url }) => (dispatch) =>
  dispatch(apiAction({
      method: 'post',
      httpRequest: { headers: { 'content-type': 'multipart/form-data' } },
      url: `/marketplace/api${url}`,
      data: {
        ...form,
      },
      onStart: sellerActionsTypes.SAVE_SELLER_START,
      onEnd: sellerActionsTypes.SAVE_SELLER_END,
      onSuccess: sellerActionsTypes.SAVE_SELLER_SUCCESS,
      onFailure: sellerActionsTypes.SAVE_SELLER_FAILURE,
    }),);
