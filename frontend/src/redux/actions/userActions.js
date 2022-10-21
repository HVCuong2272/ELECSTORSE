import Axios from 'axios';
import { USER_SIGNIN_FAIL, USER_SIGNIN_FIRSTLOGIN, USER_SIGNIN_REQUEST, USER_SIGNOUT } from "../constants/userConstants";

export const fetchUser = async (token) => {
    const res = await Axios.get('api/users/infor', {
        headers: { Authorization: token }
    })
    return res
}

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload: { email, password },
    });
    try {
        const login = await Axios.post("/api/users/login", {
            email,
            password,
        });
        dispatch({ type: USER_SIGNIN_FIRSTLOGIN, payload: { isLogged: true } });
        localStorage.setItem("firstLogin", true);
    } catch (error) {
        // console.log(error);
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message,
        });
    }
};

export const signout = () => async (dispatch) => {
    await Axios.get('/api/users/logout')
    localStorage.removeItem("firstLogin");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");

    dispatch({ type: USER_SIGNOUT });
    // Tự làm test thử => Cứ chỗ nào dispatch làm thay đổi state của store nào mà chỗ kia dùng useSelector store đó thì thg function component đó sẽ bị render lại
    // dispatch({ type: CART_EMPTY });
    // dispatch({ type: USER_REGISTER_SIGNOUT });
    // dispatch({ type: USER_DETAILS_RESET });
    window.location.href = "/";
};