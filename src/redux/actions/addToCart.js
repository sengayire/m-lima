import { addToCartActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/marketplace/api/orders',
      data: {
        ...formData,
      },
      onStart: addToCartActionsTypes.ADD_TO_CART_START,
      onEnd: addToCartActionsTypes.ADD_TO_CART_END,
      onSuccess: addToCartActionsTypes.ADD_TO_CART_SUCCESS,
      onFailure: addToCartActionsTypes.ADD_TO_CART_FAILURE,
    }),
    console.log('form data', formData),
  );
