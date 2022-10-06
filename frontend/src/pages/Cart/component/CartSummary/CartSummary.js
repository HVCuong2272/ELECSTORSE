import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartSummary.module.scss';

const cx = classNames.bind(styles);

function CartSummary() {
    return (
        <div className={cx('cart-summary')}>
            <div className={cx('cart-summary__container')}>
                <h4 className={cx('cart-summary__header')}>Cart Totals</h4>
                <div className={cx('cart-summary__body')}>
                    <div className={cx('cart-summary__body-subtotal')}>
                        <div className={cx('cart-summary__body-subtotal-title')}>Cart Subtotal</div>
                        <div className={cx('cart-summary__body-subtotal-price')}>$15.30</div>
                    </div>
                    <div className={cx('cart-summary__body-shipping')}>
                        <div className={cx('cart-summary__body-shipping-title')}>Shipping</div>
                        <div className={cx('cart-summary__body-shipping-price')}>Free Shipping</div>
                    </div>
                    <div className={cx('cart-summary__body-total')}>
                        <div className={cx('cart-summary__body-total-title')}>Total</div>
                        <div className={cx('cart-summary__body-total-price')}>$15.30</div>
                    </div>
                </div>
                <div className={cx('cart-summary__btn-container')}>
                    <div className={cx('cart-summary__btn')}>Proceed To Checkout</div>
                </div>
            </div>
        </div>
    );
}

export default CartSummary;
