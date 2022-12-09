import React from 'react';
import classNames from 'classnames/bind';
import styles from './OrderRollback.module.scss';

const cx = classNames.bind(styles);
function OrderRollback() {
    return (
        <div className={cx('order-rollback-table-container')}>
            <h1>Order Rollback</h1>
            <table className={cx('order-rollback-table')}>
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>USER BUY ID</th>
                        <th>TOTAL PRICE</th>
                        <th>USER REASON</th>
                        <th>USER ROLLBACK PAYMENT</th>
                        <th>DATE REQUEST</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SELLER ID</td>
                        <td>SELLER NAME</td>
                        <td>SELLER SHOP NAME</td>
                        <td>SELLER IN ORDERS</td>
                        <td>TOTAL FROM ORDERS</td>
                        <td>SELLER PAYMENT METHOD</td>
                        <td>SELLER PAYMENT METHOD</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderRollback;
