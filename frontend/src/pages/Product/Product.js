import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { Link, useParams } from 'react-router-dom';
import data from '~/data';
import ProductBreadcrumb from './components/ProductBreadcrumb';
import ProductSlider from './components/ProductSlider';
import ProductDetail from './components/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spin } from 'antd';
import { useEffect } from 'react';
import { detailsProduct } from '~/redux/actions/productActions';

const cx = classNames.bind(styles);

function Product() {
    // console.log('init');
    const params = useParams();
    const { id: productId } = params;
    // console.log(productId);

    const dispatch = useDispatch();
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        // console.log('dis1');
        dispatch(detailsProduct(productId));
        // console.log('dis2');
    }, [dispatch, productId]);
    // if (!product) {
    //     return <div>Product Not Found</div>;
    // }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* {// console.log('bind-product')} */}
            {loading ? (
                <div style={{ marginTop: '100px' }}>
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
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
            )}
        </>
    );
}

// Product.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Product;
