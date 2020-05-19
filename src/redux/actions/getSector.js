import { locationAddresses } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (url) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/core/api/location-addresses/sectors/district/${url}`,
      onStart: locationAddresses.GET_SECTORS_START,
      onEnd: locationAddresses.GET_SECTORS_END,
      onSuccess: locationAddresses.GET_SECTORS_SUCCESS,
      onFailure: locationAddresses.GET_SECTORS_FAILURE,
    }),
  );
