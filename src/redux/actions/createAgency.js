import { agenciesActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(apiAction({
      method: 'post',
      url: '/marketplace/api/delivery-addresses',
      data: {
        ...formData,
      },
      onStart: agenciesActionsTypes.CREATE_AGENCIES_START,
      onEnd: agenciesActionsTypes.CREATE_AGENCIES_END,
      onSuccess: agenciesActionsTypes.CREATE_AGENCIES_SUCCESS,
      onFailure: agenciesActionsTypes.CREATE_AGENCIES_FAILURE,
    }),);
