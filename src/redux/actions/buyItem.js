import { buyerActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/marketplace/api/order-details',
      data: {
        ...formData,
      },
      onStart: buyerActionsTypes.BUY_ITEM_START,
      onEnd: buyerActionsTypes.BUY_ITEM_END,
      onSuccess: buyerActionsTypes.BUY_ITEM_SUCCESS,
      onFailure: buyerActionsTypes.BUY_ITEM_FAILURE,
    }),
    console.log(formData),
  );
