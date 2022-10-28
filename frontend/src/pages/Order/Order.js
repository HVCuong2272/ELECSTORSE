import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import CheckoutStep from '~/components/CheckoutStep';
import styles from './Order.module.scss';
import { Alert, Radio, Space, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod, saveOrder } from '~/redux/actions/cartActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VisaIcon, MasterCardIcon, MomoIcon, PaypalIcon } from '~/components/Icons';
import { createOrder, detailsOrder } from '~/redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '~/redux/constants/orderConstants';

const cx = classNames.bind(styles);

function Order() {
    //   const navigate = useNavigate();
    //   const orderCreate = useSelector((state) => state.orderCreate);
    //   //const { loading, success, error, order } = orderCreate;
    //   const cart = useSelector(state => state.cart)
    //   const { Order, paymentMethod: paymentMethodInStore } = cart;

    //   useEffect(() => {
    //     dispatch(detailOrder(orderId));
    //   }, [dispatch, orderId, navigate, success]);

    //   const dispatch = useDispatch();
    //   const submitHandler = (e) => {
    //     e.preventDefault();
    //     //TODO: dispatch save shipping address action
    //     //dispatch(saveOrder({ firstName: fname, lastName: lname, country, address1: billing_address, address2: billing_address2, city, postalCode: zipcode, phone, email, note }));
    //     dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    //     // navigate('/payment')
    //   }

    //   const [paymentMethod, setPaymentMethod] = useState(paymentMethodInStore || "Card");
    //   const onChangePaymentMethod = (e) => {
    //     console.log('radio checked', e.target.value);
    //     setPaymentMethod(e.target.value);
    //     dispatch(savePaymentMethod(e.target.value));
    //   };

    const token = useSelector((state) => state.token);
    const userSignin = useSelector((state) => state.userSignin);
    const params = useParams();
    const { id: orderId } = params;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    // console.log('dsadasd', order);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch(detailsOrder(orderId));
        }
    }, [dispatch, orderId, userSignin]);

    return (
        <>
            {loading ? (
                <div style={{ marginTop: '200px' }}>
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
                <div>
                    <CheckoutStep currentStep={2} disableStep2 />
                    <div className={cx('grid wide')}>
                        <div className={cx('checkout-content')}>
                            <div className={cx('container')}>
                                <div className={cx('row')}>
                                    <div className={cx('col l-12 m-12 c-12')}>
                                        <div className={cx('order-review')}>
                                            <div className={cx('heading-s1 space-mb--20')}>
                                                <h4 style={{ fontSize: '28px' }}>Your Orders</h4>
                                            </div>
                                            <div className={cx('table-responsive', 'order_table')}>
                                                <table className={cx('table')}>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.orderItems.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>
                                                                        <Link
                                                                            to={`/product/${item.product}`}
                                                                            className={cx('product-name')}
                                                                        >
                                                                            <img
                                                                                src={item.image1}
                                                                                alt="productImage"
                                                                                className={cx('cart-image-product')}
                                                                            ></img>
                                                                            {item.name}{' '}
                                                                        </Link>
                                                                        <span className={cx('product-qty')}>
                                                                            x {item.qty}
                                                                        </span>
                                                                    </td>

                                                                    <td>${item.price}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th>SubTotal</th>
                                                            <td className={cx('product-subtotal')}>
                                                                ${order.itemsPrice.toFixed(2)}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Shipping Price</th>
                                                            <td>
                                                                {order.shippingPrice !== 0
                                                                    ? `$${order.shippingPrice.toFixed(2)}`
                                                                    : 'Free Ship'}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Tax Price</th>
                                                            <td>${order.taxPrice.toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total Price</th>
                                                            <td className={cx('product-subtotal')}>
                                                                ${order.totalPrice.toFixed(2)}
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className={cx('payment-method')}>
                                                <div
                                                    className={cx('heading-s1 space-mb--20')}
                                                    style={{ fontSize: '28px' }}
                                                >
                                                    <h4>Payment</h4>

                                                    {order.isDelivered ? (
                                                        <Alert
                                                            message="Success"
                                                            description={`Delivered at ${order.deliveredAt}`}
                                                            type="success"
                                                        />
                                                    ) : (
                                                        <Alert
                                                            message="Warning"
                                                            description="Not Delivered"
                                                            type="warning"
                                                        />
                                                    )}
                                                    {order.isPaid ? (
                                                        <Alert
                                                            message="Success"
                                                            description={`Paid at ${order.paidAt}`}
                                                            type="success"
                                                        />
                                                    ) : (
                                                        <Alert
                                                            message="Warning"
                                                            description="Not Paid"
                                                            type="warning"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Order;
