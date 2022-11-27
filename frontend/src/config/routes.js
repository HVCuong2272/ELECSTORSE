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
    orderWId: '/order/:id',
    productEditWId: '/product/:id/edit',
    orderHistory: '/orderhistory',
    userProfile: '/profile',
    productManagement: '/productmanagement',
    orderList: '/orderlist',
    userList: '/userlist',
    userEdit: '/user/:id/edit',
};

export { publicRoutes, privateRoutes };
