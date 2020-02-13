import _ from 'lodash';
import { UNSPLASH } from 'AppRedux/constants'

export const initialState = {
  data: {},
  loading: false,
  failed: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UNSPLASH.GET_USERS:
      return {
        ...state,
        data: null,
        loading: true,
        failed: false,
      };

    case UNSPLASH.GET_USERS_FAILED:
        return {
            ...state,
            data: null,
            loading: false,
            failed: action.payload,
        };
    case UNSPLASH.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: _.keyBy(action.payload, 'id'),
        failed: false,
      };
    default:
      return state;
  }
};
