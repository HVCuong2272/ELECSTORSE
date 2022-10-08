import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = {cartItems:[]}, action) =>{
    console.log('reducer summary');
    switch(action.type){
        case CART_ADD_ITEM:
    console.log('reducer summary1');
            const item = action.payload;
            // console.log(item);
            const existItem = state.cartItems.find(x=>x.product === item.product);
            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x=>x.product === existItem.product? item: x),

                };
            }
            else{
    console.log('reducer summary2');
                return {...state, cartItems: [...state.cartItems, item]}
            }
        default:
    console.log('reducer summary3');
            return state;
    }
};