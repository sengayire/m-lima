import { locationAddresses } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case locationAddresses.GET_PROVINCE_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case locationAddresses.GET_PROVINCE_END:
      return {
        ...state,
        loading: false,
      };
    case locationAddresses.GET_PROVINCE_SUCCESS:
      return {
        ...state,
        provinces: payload.content,
      };
    case locationAddresses.GET_PROVINCE_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload.message,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return null;
  }
};
