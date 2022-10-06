import { Rate } from 'antd';
import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductItem(props) {
    const { product } = props;

    return (
        <div className={cx('product', 'product-item-container')}>
            <Link to={`/product/${product._id}`} className={cx('picture-product')}>
                <img src={product.image1} alt={product.name} />
            </Link>
            <div className={cx('details')}>
                <div className={cx('details__product')}>
                    <Link to={`/product/${product._id}`} className={cx('details__product-name')}>
                        <b>{product.name}</b>
                    </Link>
                    <br />
                    <small className={cx('details__product-seller-name')}>Thang user seller</small>
                </div>
                <samp>${product.price}</samp>
            </div>
            <div className={cx('button-product-list')}>
                <div className={cx('button-product-list__information')}>
                    <div className={cx('star')}>
                        <Rate disabled allowHalf defaultValue={product.rating} />
                    </div>
                    <small>
                        {product.numReviews <= 1 ? `${product.numReviews} review ` : `${product.numReviews} reviews`}
                    </small>
                </div>

                <Link to={`/product/${product._id}`} className={cx('button-add-to-cart-product-list')}>
                    View Product
                </Link>
                <Link to={`/product/${product._id}`} className={cx('button-add-to-cart-product-list-mobile')}>
                    View
                </Link>
            </div>
        </div>
    );
}

export default ProductItem;
