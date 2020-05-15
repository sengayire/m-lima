module.exports = () => {
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  try {
    const userToken = parseJwt(localStorage.token);
    const profile = userToken.user || '{}';
    const isAuth = !!(localStorage.token && Object.keys(profile).length);

    return {
      profile,
      isAuth,
    };
  } catch (error) {
    return {
      profile: {},
      isAuth: false,
    };
  }
};
