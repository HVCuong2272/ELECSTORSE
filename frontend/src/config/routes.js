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
};
const privateRoutes = {
    shipping: '/shipping',
    orderWId: '/order/:id'
};

export { publicRoutes, privateRoutes };
