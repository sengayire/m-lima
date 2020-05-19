import { locationAddresses } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case locationAddresses.GET_SECTORS_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case locationAddresses.GET_SECTORS_END:
      return {
        ...state,
        loading: false,
      };
    case locationAddresses.GET_SECTORS_SUCCESS:
      return {
        ...state,
        sectors: payload.content,
      };
    case locationAddresses.GET_SECTORS_FAILURE:
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
