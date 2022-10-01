import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from './components/Carousel';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import Footer from '~/layouts/components/Footer';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Carousel />
            <Banner />
            {/* Product list */}
            <div className={cx('product-list')}>
                <div className={cx('product-list-header')}>
                    <h1 className={cx('product-list-header__titile')}>Feature Product</h1>
                    <p className={cx('product-list-header__sub-title')}>All Our New Product Are Here</p>
                </div>
            </div>
            {/* Product Banner Image */}
            <div className={cx('grid wide')}>
                <div className={cx('product-footer-banner')}>
                    <div className={cx('product-footer-banner__overlay')}></div>
                    <div className={cx('product-footer-banner__content')}>
                        <h2>WELCOME TO OUR SHOP</h2>
                        <p>
                            Welcome our lovely customer, We are very happy when u trust on us to choose and buying your
                            product. Hope you have a happy time when shopping on our store and find the lovely product
                            you want.
                        </p>
                        <button className={cx('product-footer-banner__content-button')}>View Collections</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

// Home.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Home;
