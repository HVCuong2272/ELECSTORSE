import Axios from 'axios';
import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    console.log('act1');
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    });
    console.log('act2');
    try {
        console.log('act3');
        const { data } = await Axios.get(`/api/products`);
        // console.log(data);
        console.log('act4');
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        console.log('act5');
    } catch (error) {
        console.log(error);
        console.log('act6');
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
        console.log('act7');
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    console.log('acc1');
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    console.log('acc2');
    try {
        console.log('acc3');
        const { data } = await Axios.get(`/api/products/${productId}`);
        // console.log(data);
        console.log('acc4');
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
        console.log('acc5');
    } catch (error) {
        console.log(error); //(Axios error)
        console.log('acc6');
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
        console.log('acc7');
    }
};
