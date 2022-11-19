import config from '~/config';

// Layouts
import { SubHeaderOnly } from '~/layouts';

// Pages
import Cart from '~/pages/Cart';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Register from '~/pages/Register';
import SigninScreen from '~/pages/SignIn';
import ActivationEmail from '~/pages/activationEmail';
import ForgetPassword from '~/pages/ForgetPassword';
import ResetPassword from '~/pages/ResetPassword';
import ShippingAddress from '~/pages/ShippingAddress';
import PrivateRoute from '~/components/PrivateRoute';
import Order from '~/pages/Order';
import OrderHistory from '~/pages/OrderHistory/OrderHistory';
import UserProfile from '~/pages/UserProfile';

// Public routes
const publicRoutes = [
    { path: config.publicRoutes.home, component: Home, layout: null },
    { path: config.publicRoutes.productWId, component: Product, layout: SubHeaderOnly },
    { path: config.publicRoutes.cartpage, component: Cart, layout: SubHeaderOnly },
    { path: config.publicRoutes.cartpageWId, component: Cart, layout: SubHeaderOnly },
    { path: config.publicRoutes.signin, component: SigninScreen },
    { path: config.publicRoutes.register, component: Register },
    { path: config.publicRoutes.activateEmail, component: ActivationEmail },
    { path: config.publicRoutes.forgetPass, component: ForgetPassword },
    { path: config.publicRoutes.resetPass, component: ResetPassword },

    // { path: config.publicRoutes.following, component: Following },
    // { path: config.publicRoutes.profile, component: Profile },
    // { path: config.publicRoutes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.publicRoutes.search, component: Search, layout: null },
];

const privateRoutes = [
    { path: config.privateRoutes.shipping, component: ShippingAddress, isPrivate: PrivateRoute },
    { path: config.privateRoutes.orderWId, component: Order, isPrivate: PrivateRoute },
    { path: config.privateRoutes.orderHistory, component: OrderHistory, isPrivate: PrivateRoute },
    { path: config.privateRoutes.userProfile, component: UserProfile, isPrivate: PrivateRoute },
];

export { publicRoutes, privateRoutes };
