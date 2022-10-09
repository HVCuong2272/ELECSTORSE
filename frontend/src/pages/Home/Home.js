import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Carousel from './components/Carousel';
import { Link } from 'react-router-dom';
import Banner from './components/Banner';
import { useEffect } from 'react';
import ProductList from '../../components/ProductList';
import ProductOutroImage from './components/ProductOutroImage';
import Header from '~/layouts/components/Header';
import SubHeader from '~/layouts/components/SubHeader';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Header />
            <SubHeader isHomePage/>
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
