import { locationAddresses } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case locationAddresses.GET_DISTRICTS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case locationAddresses.GET_DISTRICTS_END:
      return {
        ...state,
        loading: false,
      };
    case locationAddresses.GET_DISTRICTS_SUCCESS:
      return {
        ...state,
        provinceDistricts: payload.content,
      };
    case locationAddresses.GET_DISTRICTS_FAILURE:
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
