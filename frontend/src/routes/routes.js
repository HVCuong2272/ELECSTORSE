import config from '~/config';

// Layouts
import { SubHeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Product from '~/pages/Product';

// Public routes
const publicRoutes = [
    { path: config.publicRoutes.home, component: Home },
    { path: config.publicRoutes.productWId, component: Product, layout: SubHeaderOnly },

    // { path: config.publicRoutes.following, component: Following },
    // { path: config.publicRoutes.profile, component: Profile },
    // { path: config.publicRoutes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.publicRoutes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
