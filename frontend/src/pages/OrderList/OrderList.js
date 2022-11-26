import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './OrderList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteOrder, listOrders } from '~/redux/actions/orderActions';
import { Alert, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ORDER_DELETE_RESET } from '~/redux/constants/orderConstants';

const cx = classNames.bind(styles);

function OrderList() {
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const orderDelete = useSelector((state) => state.orderDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = orderDelete;

    const dispatch = useDispatch();
    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch({ type: ORDER_DELETE_RESET });
            dispatch(listOrders());
        }
    }, [dispatch, userSignin.userInfo, successDelete]);

    const deleteHandler = (order) => {
        //TODO: delete handler
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteOrder(order._id));
        }
    };

    return (
        <div className={cx('order-list__container')}>
            <h1>Orders</h1>
            {/* {loadingDelete && <Spin size="large" />} */}
            {errorDelete && <Alert message="Error" description={errorDelete} type="error" showIcon />}
            {loading ? (
                <div style={{ marginTop: '200px' }}>
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
                <table className={cx('order-list-table')}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>PAYMENT METHOD</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.user.name}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                                    <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td>
                                    <td>{order.paymentMethod === 'Card' ? 'Direct Buy' : order.paymentMethod}</td>
                                    <td>
                                        <button
                                            className={cx('btn', 'btn-fill-out', 'btn-block')}
                                            style={{ width: '100%', height: '50%' }}
                                            onClick={() => {
                                                navigate(`/order/${order._id}`);
                                            }}
                                        >
                                            Details
                                        </button>
                                        <button
                                            className={cx('btn', 'btn-fill-out', 'btn-block')}
                                            style={{ width: '100%', height: '50%' }}
                                            onClick={() => deleteHandler(order)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default OrderList;
