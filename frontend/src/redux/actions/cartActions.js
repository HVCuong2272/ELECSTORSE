import Axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"

export const addToCart = (productId, qty) => async(dispatch, getState) =>{
    console.log('action summary1');
    const{data} = await Axios.get(`/api/products/${productId}`)
    console.log('action summary2');
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        },
    });
    console.log('action summary3');
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    console.log('action summary5');
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}