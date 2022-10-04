import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { Rate, Spin, Alert } from 'antd';
import styles from './ProductList.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../ProductItem';
import axios from 'axios';
const cx = classNames.bind(styles);

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const productRef = useRef();
    //console.log(products);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        // console.log(productRef.current);
        let span = document.querySelectorAll('.button-control-product-list svg');
        let product = document.querySelectorAll(`.${productRef.current}`);
        let product_page = Math.ceil(product.length / 3);
        let l = 0;
        let movePer = 101;
        let maxMove = 203;

        //Mobile view
        let mobile_view = window.matchMedia('(max-width: 768px)');
        if (mobile_view.matches) {
            // movePer = 50.36;
            movePer = 102.5;
            maxMove = 504;
        }

        let right_move = () => {
            l = l + movePer;
            if (product === 1) {
                l = 0;
            }
            for (const i of product) {
                if (l > maxMove) {
                    l = 0;
                }
                i.style.left = '-' + l + '%';
            }
        };
        let left_move = () => {
            l = l - movePer;
            if (l < 0) {
                l = 202;
            }
            if (l === 0) {
                l = 0;
            }
            for (const i of product) {
                if (product_page > 1) {
                    i.style.left = '-' + l + '%';
                }
            }
        };
        span[1].onclick = () => {
            right_move();
        };
        span[0].onclick = () => {
            left_move();
        };
    }, []);

    return (
        <div className={cx('grid wide')}>
            <div className={cx('product-list')}>
                <div className={cx('product-list-header')}>
                    <h1 className={cx('product-list-header__titile')}>Feature Product</h1>
                    <p className={cx('product-list-header__sub-title')}>Some Of Our New Product</p>
                </div>
                <main>
                    <header>
                        <h1>Choose Your Product</h1>
                        <div className={cx('button-control-productlist')}>
                            <LeftOutlined className={cx('button-control-product-list')} />
                            <RightOutlined className={cx('button-control-product-list')} />
                        </div>
                    </header>
                    {loading ? (
                        <Spin size="large" />
                    ) : error ? (
                        <Alert
                            message="Error"
                            description={error}
                            type="error"
                            showIcon
                        />
                    ) : (
                        <>
                            <section>
                                {products.map((product) => (
                                    <ProductItem key={product._id} product={product} ref={productRef}></ProductItem>
                                ))}
                            </section>
                            <Link to="/" className={cx('view-more-btn')}>
                                View More
                            </Link>
                        </>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Product;
