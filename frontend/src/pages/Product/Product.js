import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useParams } from 'react-router-dom';
import data from '~/data';
import ProductBreadcrumb from './components/ProductBreadcrumb';
import ProductSlider from './components/ProductSlider';
import ProductDetail from './components/ProductDetail';

const cx = classNames.bind(styles);

function Product() {
    const params = useParams();
    const { id: productId } = params;
    const product = data.products.find((x) => x._id === productId);
    // console.log(productId);

    if (!product) {
        return <div>Product Not Found</div>;
    }

    return (
        <div className={cx('product')}>
            <ProductBreadcrumb product={product} />
            <div className={cx('grid wide')} style={{ marginTop: '100px' }}>
                <div className={cx('row')}>
                    <div className={cx('col l-5 c-12')} style={{ overflow: 'hidden' }}>
                        <ProductSlider product={product} />
                    </div>
                    <div className={cx('col l-7 c-12')}>
                        <ProductDetail product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Product.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Product;
