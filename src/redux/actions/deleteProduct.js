import { productsActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'delete',
      url: `/marketplace/api/products/${id}`,
      onStart: productsActionsTypes.DELETE_PRODUCT_START,
      onEnd: productsActionsTypes.DELETE_PRODUCT_END,
      onSuccess: productsActionsTypes.DELETE_PRODUCT_SUCCESS,
      onFailure: productsActionsTypes.DELETE_PRODUCT_FAILURE,
    }),
    console.log(id),
  );
