import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import CartProductList from './component/CartProductList';
import CartSummary from './component/CartSummary';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('grid wide')}>
            <div className={cx('cart')}>
                <CartProductList />
                <CartSummary />
            </div>
        </div>
    );
}

export default Cart;
