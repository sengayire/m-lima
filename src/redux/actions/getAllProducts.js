import { productsActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) =>
  dispatch(apiAction({
      method: 'get',
      url: '/marketplace/api/products',
      onStart: productsActionsTypes.GET_ALL_PRODUCTS_START,
      onEnd: productsActionsTypes.GET_ALL_PRODUCTS_END,
      onSuccess: productsActionsTypes.GET_ALL_PRODUCTS_SUCCESS,
      onFailure: productsActionsTypes.GET_ALL_PRODUCTS_FAILURE,
    }),);
