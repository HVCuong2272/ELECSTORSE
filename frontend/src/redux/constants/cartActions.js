import Axios from 'axios';
import { CART_ADD_ITEM } from "./cartConstants"

export const addToCart = (productId, qty) => async(dispatch, getState) =>{
    const{data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name: data.name,
            image1: data.image1,
            image2: data.image2,
            image3: data.image3,
            price: data.price,
            contInStock: data.contInStock,
            product: data._id,
            qty,
        },
    });
    localStorage.setItem('carItems', JSON.stringify(getState().cart.cartItems));
};