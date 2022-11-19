import {
    FacebookOutlined,
    TwitterOutlined,
    GooglePlusOutlined,
    YoutubeOutlined,
    InstagramOutlined,
    ShoppingCartOutlined,
    StarFilled,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Rate } from 'antd';
import { useState } from 'react';
import { CART_RESET_ITEM } from '~/redux/constants/cartConstants';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function ProductDetail(props) {
    const { product } = props;
    // console.log(productId);
    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch({ type: CART_RESET_ITEM });
        navigate(`/cart/${product._id}?qty=${qty}`);
    };

    if (!product) {
        return;
    }
    return (
        <div className={cx('product-detail')}>
            <h2 className={cx('product-detail__title')}>{product.name}</h2>
            <div className={cx('product-detail__subtitle')}>
                <div className={cx('product-detail__subtitle-leftside')}>
                    <div className={cx('product-detail__subtitle-price')}>${product.price}</div>
                    <div
                        className={cx('product-detail__subtitle-status', {
                            success: product.countInStock > 0,
                            danger: product.countInStock === 0,
                        })}
                    >
                        {product.countInStock > 0 ? 'In stock' : 'Sold Out'}
                    </div>
                </div>
                <div className={cx('product-detail__subtitle-rating')}>
                    <Rate disabled allowHalf defaultValue={product.rating} />({product.rating})
                </div>
            </div>
            <div className={cx('product-detail__description')}>{product.description}</div>
            <ul className={cx('product-detail__info-list')}>
                <li className={cx('product-detail__info-item')}>
                    <span>Seller:</span>
                    <Link to={{}} className={cx('product-detail__info-item__user')}>
                        <img
                            src="https://adev42.com/frontend/assets/f8-shop/img/avatar-1.jpg"
                            alt=""
                            className={cx('product-detail__info-item__user-img')}
                        />
                        <span className={cx('product-detail__info-item__user-name')}>Thang Le</span>
                        <span className={cx('product-detail__info-item__user-statistic')}>
                            (rating: 5
                            <span>
                                <StarFilled style={{ color: '#fadb14' }} />
                            </span>
                            , 0 review)
                        </span>
                    </Link>
                </li>
                <li className={cx('product-detail__info-item')}>
                    <span>Category:</span>
                    <Link to={{}}>fashion</Link> , <Link to={{}}>men</Link>
                </li>
                <li className={cx('product-detail__info-item')}>
                    <span>Share:</span>
                    <Link to={{}}>
                        <FacebookOutlined />
                    </Link>
                    <Link to={{}}>
                        <TwitterOutlined />
                    </Link>
                    <Link to={{}}>
                        <GooglePlusOutlined />
                    </Link>
                    <Link to={{}}>
                        <YoutubeOutlined />
                    </Link>
                    <Link to={{}}>
                        <InstagramOutlined />
                    </Link>
                </li>
            </ul>
            {product.countInStock > 0 && (
                <div className={cx('product-detail__actions')}>
                    <div className={cx('product-detail__actions-selectQty')}>
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                            {/* Nếu count in stock là 5 thì sẽ return từ 0->4 */}
                            {/* {// console.log([
                                ...Array(product.countInStock).keys(),
                              ])} */}
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('product-detail__actions-addToCart')} onClick={addToCartHandler}>
                        <div>
                            <ShoppingCartOutlined />
                            <span>Add to Cart</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Product.propTypes = {
//     children: PropTypes.node.isRequired,
// };

export default ProductDetail;
