const publicRoutes = {
    home: '/',
    productWId: '/product/:id',
    cartpage: '/cart',
    cartpageWId: '/cart/:id',
    signin: '/signin',
    register: '/register',
    activateEmail: '/user/activate/:activation_token',
    forgetPass: '/forgot_password',
    resetPass: '/user/reset/:token',
    shipping: '/shipping'
};
const privateRoutes = {};

export { publicRoutes, privateRoutes };
