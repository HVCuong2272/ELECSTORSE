import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductOutroImage.module.scss';
const cx = classNames.bind(styles);




function ProductOutroImage() {
    return (
        <div className={cx('grid wide')}>
            <div className={cx('product-footer-banner')}>
                <div className={cx('product-footer-banner__overlay')}></div>
                <div className={cx('product-footer-banner__content')}>
                    <h2>WELCOME</h2>

                    <p>
                    Welcome our lovely customer, We are very happy when u trust on us to choose and buying your product. Hope you have a happy time when shopping on our store and find the lovely product you want.
                    We are committed to 100% satisfaction of our customers and your feedback is very important for us, so please let us know what was your experience with our products or our services.

                    Thank you, again, for your purchase from the ELECSTORSE store.

                    If you have any problems with your purchase, feel free to contact us at any time.

                    Thanks
                    </p>

               
             
                    
                    <button className={cx('product-footer-banner__content-button')}>
                        View Collections
                    </button>




                </div>
            </div>
        </div>
    );
}

export default ProductOutroImage;
