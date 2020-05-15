import { signinActionsTypes } from '../../actionsTypes';

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export default (state, { type, payload }) => {
  const userToken = parseJwt(payload && payload.accessToken);
  switch (type) {
    case signinActionsTypes.SIGNIN_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case signinActionsTypes.SIGNIN_END:
      return {
        ...state,
        loading: false,
      };
    case signinActionsTypes.SIGNIN_SUCCESS:
      localStorage.token = payload.accessToken;
      localStorage.isAuth = true;
      return {
        ...state,
        isAuth: localStorage.isAuth,
        profile: userToken.user,
        token: payload.token,
        loading: false,
      };
    case signinActionsTypes.SIGNIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return state;
  }
};
