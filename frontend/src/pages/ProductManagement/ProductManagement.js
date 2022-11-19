import { listProducts } from '~/redux/actions/productActions';
import { Alert, Radio, Space, Spin } from 'antd';
import { useEffect } from 'react';
import Product from '../Product/Product';

export default function ProductManagement() {
    const productManagement = useSelector((state) => state.productManagement);
    const { loading, error, products } = productManagement;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
    });
    return (
        <div>
            <h1>Products</h1>
            {loading ? (
                <Spin size="large" />
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
                <>
                    <table>
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
                            )

                            )

                            }
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}
