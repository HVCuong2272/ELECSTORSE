import {
    ORDER_ROLLBACK_CREATE_FAIL,
    ORDER_ROLLBACK_CREATE_REQUEST,
    ORDER_ROLLBACK_CREATE_RESET,
    ORDER_ROLLBACK_CREATE_SUCCESS,
} from '../constants/orderRollbackConstants';

export const orderRollbackCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_ROLLBACK_CREATE_REQUEST:
            return { loading: true };
        case ORDER_ROLLBACK_CREATE_SUCCESS:
            return { loading: false, success: true, orderRollBack: action.payload };
        case ORDER_ROLLBACK_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ORDER_ROLLBACK_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
