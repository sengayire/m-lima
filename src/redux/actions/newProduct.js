import { productsActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default ({ form, url }) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/marketplace/api${url}`,
      data: {
        ...form,
      },
      onStart: productsActionsTypes.CREATE_NEW_PRODUCT_START,
      onEnd: productsActionsTypes.CREATE_NEW_PRODUCT_END,
      onSuccess: productsActionsTypes.CREATE_NEW_PRODUCT_SUCCESS,
      onFailure: productsActionsTypes.CREATE_NEW_PRODUCT_FAILURE,
    }),
  );
