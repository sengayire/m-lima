import { locationAddresses } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default () => (dispatch) =>
  dispatch(
    apiAction({
      method: 'get',
      url: '/core/api/location-addresses/provinces',
      onStart: locationAddresses.GET_PROVINCE_START,
      onEnd: locationAddresses.GET_PROVINCE_END,
      onSuccess: locationAddresses.GET_PROVINCE_SUCCESS,
      onFailure: locationAddresses.GET_PROVINCE_FAILURE,
    }),
  );
