const checkUser = require('../../../helpers/checkUser')();

module.exports = {
  profile: checkUser.profile,
  token: localStorage.token,
  isAuth: checkUser.isAuth,
  message: '',
  errors: '',
  loading: false,
};
