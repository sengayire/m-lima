import { sellerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default ({ orgID }) => (dispatch) =>
  dispatch(apiAction({
      method: 'get',
      url: `marketplace/api/products/seller-id/${orgID}`,
      onStart: sellerActionsTypes.GET_SELLER_PRODUCTS_START,
      onEnd: sellerActionsTypes.GET_SELLER_PRODUCTS_END,
      onSuccess: sellerActionsTypes.GET_SELLER_PRODUCTS_SUCCESS,
      onFailure: sellerActionsTypes.GET_SELLER_PRODUCTS_FAILURE,
    }),);
