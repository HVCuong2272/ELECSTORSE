import Axios from 'axios';
import { showErrorMessage, showSuccessMessage } from '~/utils/notifyService';
import {
    ORDER_ROLLBACK_CREATE_FAIL,
    ORDER_ROLLBACK_CREATE_REQUEST,
    ORDER_ROLLBACK_CREATE_SUCCESS,
} from '../constants/orderRollbackConstants';

export const createOrderRollback = (orderRollback, orderId) => async (dispatch, getState) => {
    dispatch({ type: ORDER_ROLLBACK_CREATE_REQUEST });
    try {
        const { token } = getState();
        const { data } = await Axios.post(`/api/orderRollback/${orderId}`, orderRollback, {
            headers: {
                Authorization: `${token}`,
            },
        });
        showSuccessMessage(`Your RollBack Request has been sent successfully!`, 'topRight');
        dispatch({ type: ORDER_ROLLBACK_CREATE_SUCCESS, payload: data });
        //     dispatch({ type: CART_EMPTY });
        // localStorage.removeItem("cartItems")
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        showErrorMessage(message, 'topRight');
        dispatch({ type: ORDER_ROLLBACK_CREATE_FAIL, payload: message });
    }
};
