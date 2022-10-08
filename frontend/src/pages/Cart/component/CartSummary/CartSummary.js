import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartSummary.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Manipulation } from 'swiper';
import { useDispatch } from 'react-redux';
import { addToCart } from '~/redux/constants/cartActions';

const cx = classNames.bind(styles);

function CartSummary() {
    const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get('qty');
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

    const dispatch = useDispatch();
    useEffect(()=>{
        if (productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    return (
        <div className={cx('cart-summary')}>
            <p>
                ADD TO CART : ProductID: {productId} Qty: {qty}
            </p>
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
