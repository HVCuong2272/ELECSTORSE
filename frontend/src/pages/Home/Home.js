import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from './components/Carousel';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import { useEffect } from 'react';
import ProductList from '../../components/ProductList';
import ProductOutroImage from './components/ProductOutroImage';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Carousel />
            <Banner />
            <ProductList />
            <ProductOutroImage />
        </div>
    );
}

// Home.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default Home;
