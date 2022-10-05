import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartSummary.module.scss';

const cx = classNames.bind(styles);

function CartSummary() {
    return <div className={cx('cart-summary')}>CartSummary</div>;
}

export default CartSummary;
