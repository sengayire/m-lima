import { locationAddresses } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (url) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/core/api/location-addresses/cells/sector/${url}`,
      onStart: locationAddresses.GET_CELL_START,
      onEnd: locationAddresses.GET_CELL_END,
      onSuccess: locationAddresses.GET_CELL_SUCCESS,
      onFailure: locationAddresses.GET_CELL_FAILURE,
    }),
  );
