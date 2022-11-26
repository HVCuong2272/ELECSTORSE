// eslint-disable-next-line
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import data from '~/data';
import { cartReducer } from './reducers/cartReducers';
import {
    productCreateReducer,
    productDetailsReducer,
    productListReducer,
    productUpdateReducer,
} from './reducers/productReducers';
import { userDetailsReducer, userSigninReducer, userUpdateProfileReducer } from './reducers/userReducers';
import tokenReducer from './reducers/tokenReducers';
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderMineListReducer,
    orderPayReducer,
} from './reducers/orderReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],

        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},

        paymentMethod: localStorage.getItem('cartSavePaymentMethod')
            ? JSON.parse(localStorage.getItem('cartSavePaymentMethod'))
            : 'Card',
    },
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    token: tokenReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
});
// const reducer = (state, action) => {
//     // console.log('reducer123');
//     return { products: data.products };
// };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
