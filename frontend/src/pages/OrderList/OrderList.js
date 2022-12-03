import PropTypes from 'prop-types';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Alert, Spin, DatePicker } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Input, Space } from 'antd';
import styles from './OrderList.module.scss';
import { deleteOrder, listOrders } from '~/redux/actions/orderActions';
import { ORDER_DELETE_RESET } from '~/redux/constants/orderConstants';
import { useState } from 'react';

const cx = classNames.bind(styles);
const { Search } = Input;

function OrderList() {
    const { pathname } = useLocation();
    const sellerMode = pathname.indexOf('/seller') >= 0;
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    const orderDelete = useSelector((state) => state.orderDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = orderDelete;

    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [searchValue, setSearchValue] = useState('');
    const monthFormat = 'MM/YYYY';
    let total = 0;

    const dispatch = useDispatch();
    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch({ type: ORDER_DELETE_RESET });
            dispatch(
                listOrders({
                    seller: sellerMode ? JSON.parse(localStorage.getItem('userInfo'))._id : '',
                    month: month,
                    year: year,
                }),
            );
        }
    }, [dispatch, userSignin.userInfo, successDelete, sellerMode]);

    const deleteHandler = (order) => {
        //TODO: delete handler
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteOrder(order._id));
        }
    };

    const handleMonthChange = (date, dateString) => {
        const monthAndYearArray = dateString.split('/');
        // console.log(monthAndYearArray);
        setMonth(monthAndYearArray[0]);
        setYear(monthAndYearArray[1]);
        dispatch(
            listOrders({
                month: monthAndYearArray[0],
                year: monthAndYearArray[1],
                seller: sellerMode ? JSON.parse(localStorage.getItem('userInfo'))._id : '',
                searchValue: searchValue,
            }),
        );
    };

    const onSearch = (value) => {
        dispatch(
            listOrders({
                seller: sellerMode ? JSON.parse(localStorage.getItem('userInfo'))._id : '',
                searchValue: value,
                month: month,
                year: year,
            }),
        );
    };
    return (
        <div className={cx('order-list__container')}>
            <div className={cx('order-list__heading')}>
                <h1>Orders</h1>
                <div className={cx('order-list-table-filter')}>
                    <div className={cx('order-list-table__search')}>
                        <Search
                            placeholder="Input order id or user order name"
                            onSearch={onSearch}
                            onChange={(e) => setSearchValue(e.target.value)}
                            enterButton
                        />
                    </div>
                    <div className={cx('order-list-table__datepicker')}>
                        <DatePicker
                            allowClear={false}
                            readOnly="readonly"
                            defaultValue={moment()}
                            format={monthFormat}
                            onChange={handleMonthChange}
                            picker="month"
                        />
                    </div>
                </div>
            </div>
            {/* {loadingDelete && <Spin size="large" />} */}
            {errorDelete && <Alert message="Error" description={errorDelete} type="error" showIcon />}
            {loading ? (
                <div style={{ marginTop: '200px' }}>
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
                <>
                    <table className={cx('order-list-table')}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER ORDER NAME</th>
                                <th>DATE</th>
                                <th>ORDER TOTAL</th>
                                {JSON.parse(localStorage.getItem('userInfo')).isSeller && (
                                    <th>
                                        SELLER GET TOTAL <br></br>
                                        {`(order must already paid)`}
                                    </th>
                                )}
                                <th>IS USER PAID</th>
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
                                        <td>
                                            {order.totalPrice}$
                                            {JSON.parse(localStorage.getItem('userInfo')).isAdmin && order.isPaid && (
                                                <span style={{ display: 'none' }}>{(total += order.totalPrice)}</span>
                                            )}
                                        </td>
                                        {JSON.parse(localStorage.getItem('userInfo')).isSeller && (
                                            <td>
                                                {order.isPaid
                                                    ? order.orderItems.reduce((acc, currentItem) => {
                                                          if (
                                                              currentItem.seller._id ===
                                                              JSON.parse(localStorage.getItem('userInfo'))._id
                                                          ) {
                                                              // console.log('avdd1', currentItem);
                                                              // console.log('avdd', acc);
                                                              total += currentItem.price * currentItem.qty;
                                                              return (acc += currentItem.price * currentItem.qty);
                                                          }
                                                          return acc;
                                                      }, 0)
                                                    : '0'}
                                                $
                                            </td>
                                        )}
                                        {/* <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td> */}
                                        <td>
                                            {order.isPaid
                                                ? `${new Date(order.paidAt).toLocaleDateString('en-GB')} ${new Date(
                                                      order.paidAt,
                                                  ).toLocaleTimeString()}`
                                                : 'No'}
                                        </td>
                                        <td>
                                            {order.isDelivered
                                                ? `${new Date(order.deliveredAt).toLocaleDateString(
                                                      'en-GB',
                                                  )} ${new Date(order.deliveredAt).toLocaleTimeString()}`
                                                : 'No'}
                                        </td>
                                        {/* <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}</td> */}
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
                    <div>
                        Revenue From {month}/{year} Page 1: {total}$
                    </div>
                </>
            )}
        </div>
    );
}

export default OrderList;
