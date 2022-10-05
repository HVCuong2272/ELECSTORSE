import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartProductList.module.scss';

const cx = classNames.bind(styles);

function CartProductList() {
    return <div className={cx('cart-product-list')}>CartProductList</div>;
}

export default CartProductList;
