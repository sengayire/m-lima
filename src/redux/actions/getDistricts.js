import { locationAddresses } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: `/core/api/location-addresses/districts/province/${id}`,
      onStart: locationAddresses.GET_DISTRICTS_START,
      onEnd: locationAddresses.GET_DISTRICTS_END,
      onSuccess: locationAddresses.GET_DISTRICTS_SUCCESS,
      onFailure: locationAddresses.GET_DISTRICTS_FAILURE,
    }),
  );
