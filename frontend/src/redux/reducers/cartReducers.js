import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    console.log('reducer summary');
    switch (action.type) {
        case CART_ADD_ITEM:
            console.log('reducer summary1');
            const item = action.payload;
            // console.log(item);
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
                };
            } else {
                console.log('reducer summary2');
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case CART_REMOVE_ITEM:
            return { ...state, cartItems: state.cartItems.filter((x) => x.product !== action.payload), success: true };
        case CART_RESET_ITEM:
            return {
                cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
            }
        default:
            console.log('reducer summary3');
            return state;
    }
};
