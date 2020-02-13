export const getUsers = state => Object.values(state.Users.data || {})
export const getLoading = state => state.Users.loading;
export const getFailed = state => state.Users.failed;
