import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_FIRSTLOGIN, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstants";


export const userSigninReducer = (state = { userInfo: null, isLogged: false, loading: true }, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true };
        case USER_SIGNIN_FIRSTLOGIN:
            return { loading: false, isLogged: action.payload.isLogged };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload.userInfo, isLogged: action.payload.isLogged };
        case USER_SIGNIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNOUT:
            return { userInfo: null, isLogged: false };
        case USER_SIGNIN_RESET:
            return { ...state, error: '', loading: false }
        default:
            return state;
    }
};
export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };