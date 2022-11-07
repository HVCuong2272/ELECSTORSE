import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Radio, Space, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';
import { listOrderMine } from '~/redux/actions/orderActions';

const cx = classNames.bind(styles);

export default function OrderHistory() {
  const orderMineList = useSelector(state => state.orderMineList);
  const userSignin = useSelector((state) => state.userSignin);
  const {loading,error,orders}=orderMineList;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSignin.userInfo) {
    dispatch(listOrderMine());
    }
  }, [dispatch, userSignin.userInfo]);
  

  return (
    <div className={cx('order-history__container')}>
        <h1>
            OrderHistory
        </h1>
        {loading ? (
                    <div style={{ marginTop: '200px' }}>
                        <Spin size="large" />
                    </div>
                ) : error ? (
                    <Alert message="Error" description={error} type="error" showIcon />
                ) : (
        <table className={cx('order-history-table')}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {orders && orders.map((order) => (
                    <tr key={order._id}>
                        <td>{order._id}</td>
                        <td>{order.createdAt.substring(0,10)}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.isPaid ? order.paidAt.substring(0,10):'No'}</td>
                        <td>
                            {
                                order.isDelivered
                                    ? order.deliveredAt.substring(0,10)
                                    : 'No'
                            }
                        </td>
                        <td>
                            <button
                                type="button"
                                className="small"
                                onClick={()=>{
                                    navigate(`/order/${order._id}`);
                                }}
                            >
                                Details
                            </button>
                        </td>
                    </tr>
                ) 
                
                )}
            </tbody>
        </table>
                )}            
    </div>
  )
}
