export const selectUserData = state => state.auth.user;
export const selectUserToken = state => state.auth.token;
export const selectUserIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserIsRefreshing = state => state.auth.isRefreshing;
