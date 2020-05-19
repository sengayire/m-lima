import { sellerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default ({ form, url }) => (dispatch) =>
  dispatch(apiAction({
      method: 'put',
      url: `marketplace/api/sellers${url}/26`,
      data: {
        ...form,
      },
      onStart: sellerActionsTypes.EDIT_SELLER_START,
      onEnd: sellerActionsTypes.EDIT_SELLER_END,
      onSuccess: sellerActionsTypes.EDIT_SELLER_SUCCESS,
      onFailure: sellerActionsTypes.EDIT_SELLER_FAILURE,
    }),);
