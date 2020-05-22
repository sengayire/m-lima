import jwtDecoder from 'jwt-decode';
import { signinActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  let userToken;
  let user = {};
  let profile = {};
  let orgID = 0;
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
      userToken = jwtDecoder(payload.accessToken);
      orgID = userToken.organizationId;
      user = { ...userToken.user, orgID };
      localStorage.token = payload.accessToken;
      localStorage.isAuth = true;
      localStorage.setItem('profile', JSON.stringify(user));
      profile = JSON.parse(localStorage.getItem('profile'));
      return {
        ...state,
        isAuth: localStorage.isAuth,
        profile,
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
