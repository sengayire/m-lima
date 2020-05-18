module.exports = () => {
  try {
    const profile = JSON.parse(localStorage.profile) || '{}';
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
