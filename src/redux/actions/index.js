import request from 'Utils/request';
import { UNSPLASH } from 'AppRedux/constants'

export const getUserSuccess = payload => ({type: UNSPLASH.GET_USERS_SUCCESS, payload});
export const getUserFailed = payload => ({type: UNSPLASH.GET_USERS_FAILED, payload});
export const getUserLoading = () => ({type: UNSPLASH.GET_USERS});
export const fetchUsers = name => dispatch => {
  dispatch(getUserLoading());
  try {
    request(
      `search/users?page=1&per_page=21&query=${name}&count=30`,
    ).then(res => {
        dispatch(getUserSuccess(res.data.results));
    });
  } catch (error) {
    dispatch(getUserFailed(error.message));
  }
};
