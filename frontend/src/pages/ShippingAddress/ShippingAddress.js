import classNames from 'classnames/bind';
import CheckoutStep from '~/components/CheckoutStep';
import styles from './ShippingAddress.module.scss';

const cx = classNames.bind(styles);

function ShippingAddress() {
  return (
    <div>
        <CheckoutStep currentStep="2"/>
        <div className="grid wide">
fdfdf
        </div>
    </div>
  )
}

export default ShippingAddress