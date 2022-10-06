import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CartProductList.module.scss';
import { Space, Table, Tag } from 'antd';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function CartProductList() {
    const data = [
        {
            key: '1',
            image: 'John Brown',
            product: 32,
            price: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            image: 'Jim Green',
            product: 42,
            price: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            image: 'Joe Black',
            product: 32,
            price: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            image: 'Joe Black',
            product: 32,
            price: 'Sidney No. 1 Lake Park',
        },
        {
            key: '5',
            image: 'Joe Black',
            product: 32,
            price: 'Sidney No. 1 Lake Park',
        },
        {
            key: '6',
            image: 'Joe Black',
            product: 32,
            price: 'Sidney No. 1 Lake Park',
        },
    ];
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            key: 'qunatity',
            dataIndex: 'quantity',
        },
        {
            title: 'Total',
            key: 'total',
            dataIndex: 'quantity',
            render: () => (
                <div className={cx('cart-product-list__actions-selectQty')}>
                    {/* <select value={qty} onChange={(e) => setQty(e.target.value)}> */}
                    <select value="10">
                        {/* Nếu count in stock là 5 thì sẽ return từ 0->4 */}
                        {/* {console.log([
                                ...Array(product.countInStock).keys(),
                              ])} */}
                        {/* {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))} */}
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            ),
        },
        {
            title: 'Remove',
            key: 'remove',
            render: () => (
                <Space className={cx('cart-product-list__space-remove-header')}>
                    <Link className={cx('cart-product-list__space-remove-content')} to="/">
                        X
                    </Link>
                </Space>
            ),
        },
    ];
    return (
        <div className={cx('cart-product-list')}>
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default CartProductList;
