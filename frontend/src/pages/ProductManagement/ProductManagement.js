import { createProduct, listProducts } from '~/redux/actions/productActions';
import { Alert, Radio, Space, Spin } from 'antd';
import { useEffect } from 'react';
import Product from '../Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_CREATE_RESET } from '~/redux/constants/productConstants';
import styles from './ProductManagement.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function ProductManagement() {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const productCreate = useSelector((state) => state.productCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
            navigate(`/product/${createdProduct._id}/edit`);
        } else if (errorCreate) {
            dispatch({ type: PRODUCT_CREATE_RESET });
        }
        dispatch(listProducts());
    }, [createdProduct, dispatch, navigate, successCreate]);
    const deleteHandler = () => {
        //TODO: dispatch delete action
    };
    const createHandler = () => {
        dispatch(createProduct());
    };
    return (
        <div className={cx('product-management-container')}>
            <div className={cx('product-management-heading')}>
                <h1>Products</h1>
                <button type="button" className={cx('btn', 'btn-fill-out', 'btn-block')} onClick={createHandler}>
                    Create Product
                </button>
            </div>
            <div className={cx('row')}>
                {loadingCreate && <Spin size="large" />}
                {errorCreate && (
                    <Alert
                        message="Error"
                        style={{ width: '100%', margin: '0 30px 30px' }}
                        description={errorCreate}
                        type="error"
                        showIcon
                    />
                )}
                {loading ? (
                    <Spin size="large" />
                ) : error ? (
                    <Alert message="Error" description={error} type="error" showIcon />
                ) : (
                    <>
                        <table className={cx('product-management-table')}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={Product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.category}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.actions}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
}
