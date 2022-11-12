import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import CheckoutStep from '~/components/CheckoutStep';
import styles from './Order.module.scss';
import { Alert, Radio, Space, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod, saveOrder } from '~/redux/actions/cartActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { VisaIcon, MasterCardIcon, MomoIcon, PaypalIcon } from '~/components/Icons';
import { createOrder, detailsOrder, payOrder } from '~/redux/actions/orderActions';
import { ORDER_CREATE_RESET, ORDER_PAY_RESET } from '~/redux/constants/orderConstants';
import Axios from 'axios';
import { PayPalButton } from 'react-paypal-button-v2';
import { CART_EMPTY } from '~/redux/constants/cartConstants';

const cx = classNames.bind(styles);
const countryList = {
    '': 'Select your country...',
    AF: 'Afghanistan',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas (the)',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia (Plurinational State of)',
    BQ: 'Bonaire, Sint Eustatius and Saba',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory (the)',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    CV: 'Cabo Verde',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    KY: 'Cayman Islands (the)',
    CF: 'Central African Republic (the)',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands (the)',
    CO: 'Colombia',
    KM: 'Comoros (the)',
    CD: 'Congo (the Democratic Republic of the)',
    CG: 'Congo (the)',
    CK: 'Cook Islands (the)',
    CR: 'Costa Rica',
    HR: 'Croatia',
    CU: 'Cuba',
    CW: 'Curaçao',
    CY: 'Cyprus',
    CZ: 'Czechia',
    CI: "Côte d'Ivoire",
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic (the)',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    SZ: 'Eswatini',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (the) [Malvinas]',
    FO: 'Faroe Islands (the)',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories (the)',
    GA: 'Gabon',
    GM: 'Gambia (the)',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island and McDonald Islands',
    VA: 'Holy See (the)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran (Islamic Republic of)',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: "Korea (the Democratic People's Republic of)",
    KR: 'Korea (the Republic of)',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: "Lao People's Democratic Republic (the)",
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands (the)',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia (Federated States of)',
    MD: 'Moldova (the Republic of)',
    MC: 'Monaco',
    MN: 'Mongolia',
    ME: 'Montenegro',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands (the)',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger (the)',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands (the)',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestine, State of',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines (the)',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    MK: 'Republic of North Macedonia',
    RO: 'Romania',
    RU: 'Russian Federation (the)',
    RW: 'Rwanda',
    RE: 'Réunion',
    BL: 'Saint Barthélemy',
    SH: 'Saint Helena, Ascension and Tristan da Cunha',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    MF: 'Saint Martin (French part)',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SX: 'Sint Maarten (Dutch part)',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    SS: 'South Sudan',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan (the)',
    SR: 'Suriname',
    SJ: 'Svalbard and Jan Mayen',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan',
    TJ: 'Tajikistan',
    TZ: 'Tanzania, United Republic of',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands (the)',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates (the)',
    GB: 'United Kingdom of Great Britain and Northern Ireland (the)',
    UM: 'United States Minor Outlying Islands (the)',
    US: 'United States of America (the)',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela (Bolivarian Republic of)',
    VN: 'Viet Nam',
    VG: 'Virgin Islands (British)',
    VI: 'Virgin Islands (U.S.)',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
    AX: 'Åland Islands',
};
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

    const [sdkReady, setSdkReady] = useState(false);
    const token = useSelector((state) => state.token);
    const userSignin = useSelector((state) => state.userSignin);
    const params = useParams();
    const { id: orderId } = params;
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    console.log('dsadasd', order);
    const orderPay = useSelector((state) => state.orderPay);
    const { loading: loadingPay, error: errorPay, success: successPay } = orderPay;
    const dispatch = useDispatch();

    const [errorVNPay, setErrorVNPay] = useState('');
    const [successVNPay, setSuccessVNPay] = useState('');
    const [loadingVNPay, setLoadingVNPay] = useState(false)

    useEffect(() => {
        if (userSignin.userInfo) {
            const addPayPalScript = async () => {
                const { data } = await Axios.get('/api/config/paypal');
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
                script.async = true;
                script.onload = () => {
                    setSdkReady(true);
                };
                document.body.appendChild(script);
            };
            if (!order || successPay || (order && order._id !== orderId)) {
                dispatch({ type: ORDER_PAY_RESET });
                dispatch(detailsOrder(orderId));
            } else {
                if (!order.isPaid) {
                    if (!window.paypal) {
                        addPayPalScript();
                    } else {
                        setSdkReady(true);
                    }
                }
                else {
                    dispatch({ type: CART_EMPTY });
                    localStorage.removeItem("cartItems");
                }
            }
        }
    }, [dispatch, orderId, userSignin, order, sdkReady, successPay]);

    const successPaymentHandler = (paymentResult) => {
        console.log('paymentResult: ', paymentResult);
        dispatch(payOrder(order, paymentResult));
    };
    useEffect(() => {
        if (order && order.paymentMethod === 'VNPay') {
            const submitHandler = async (value) => {
                console.log('Received values of form: ', order);
                setLoadingVNPay(true);
                try {
                    const res = await Axios.post('/paymentvnp/checkout', {
                        firstname: order.shippingAddress.firstName,
                        astname: order.shippingAddress.lastName,
                        billingStreet: order.shippingAddress.address1,
                        billingCity: '01',
                        billingStateProvince: order.shippingAddress.city,
                        billingCountry: order.shippingAddress.country,
                        billingPostCode: order.shippingAddress.postCode,
                        email: order.shippingAddress.email,
                        phoneNumber: order.shippingAddress.phone,
                        // amount: '900000',
                        amount: order.totalPrice,
                        paymentMethod: 'vnPay',
                        orderId: order._id,
                    },
                        // {
                        //     header: {
                        //         'Content-Type': 'application/json',
                        //         'Access-Control-Allow-Origin': '*'
                        //     },
                        // }
                    );
                    // window.open(res.data,'NewWindow','resizable = yes');
                    // console.log(res.data.forwardLink)
                    if (order && !order.isPaid) {
                        window.location = res.data.forwardLink;
                        setSuccessVNPay(res.data.msg);
                        console.log("SUCCESS PAY", res);
                        setLoadingVNPay(false)
                    } else {
                        setErrorVNPay(true)
                        setLoadingVNPay(false)
                    }
                    // window.location = res.data

                    // window.opener=null;
                    // window.open('','_self');
                    // window.close();
                    // setErrorVNPay('');
                    // setSuccessVNPay(res.data.msg);
                } catch (err) {
                    setSuccessVNPay('');
                    err.response.data.msg &&
                        setErrorVNPay(err.response.data.msg)
                }
            };
            submitHandler();
        }
    }, [order]);
    return (
        <>
            {(order && !order.isPaid && order.paymentMethod === 'VNPay') ? (
                <div style={{ marginTop: '200px' }}>
                    <Spin size="large" />
                </div>
            ) :
                (<>
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
                                                    <div
                                                        className={cx('heading-s1 space-mb--20')}
                                                        style={{ textAlign: 'center' }}
                                                    >
                                                        <h4 style={{ fontSize: '33px', textDecoration: '', color: '#ff4d4f' }}>
                                                            Your Orders Sumary
                                                        </h4>
                                                    </div>
                                                    <div className={cx('table-responsive', 'order_table')}>
                                                        <table className={cx('table1')}>
                                                            <thead>
                                                                <tr
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '22px',
                                                                        textDecoration: 'underline',
                                                                        color: '#ff4d4f',
                                                                    }}
                                                                >
                                                                    <p style={{ fontWeight: 'bold' }}>
                                                                        Your Delivery Information
                                                                    </p>
                                                                </tr>
                                                                <tr>
                                                                    <th style={{ border: 'none' }}></th>
                                                                    <th style={{ border: 'none' }}></th>
                                                                </tr>
                                                                <tr>
                                                                    <th style={{ borderTop: 'none' }}>First Name</th>
                                                                    <td
                                                                        className={cx('product-subtotal')}
                                                                        style={{ border: 'none' }}
                                                                    >
                                                                        {order.shippingAddress.firstName}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Last Name</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.lastName}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Address 01</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.address1}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Address 02</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.address2}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>City</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.city}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Country</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {countryList[order.shippingAddress.country]}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Postal Code</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.postalCode}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Phone Number</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.phone}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Email</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.email}
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Additional Note</th>
                                                                    <td className={cx('product-subtotal')}>
                                                                        {order.shippingAddress.note}
                                                                    </td>
                                                                </tr>
                                                            </thead>
                                                        </table>

                                                        <table className={cx('table3')}>
                                                            <thead>
                                                                <tr></tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr></tr>
                                                            </tbody>
                                                        </table>

                                                        <table className={cx('table2')}>
                                                            <thead>
                                                                <tr
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        fontSize: '22px',
                                                                        textDecoration: 'underline',
                                                                        color: '#ff4d4f',
                                                                    }}
                                                                >
                                                                    <b style={{ fontWeight: 'bold' }}>Your Cart Detail</b>
                                                                </tr>
                                                                <tr>
                                                                    <th style={{ border: 'none' }}></th>
                                                                    <th style={{ border: 'none' }}></th>
                                                                </tr>

                                                                <tr style={{ border: 'none' }}>
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
                                                                                    <div
                                                                                        style={{
                                                                                            display: 'flex',
                                                                                            justifyContent: 'center',
                                                                                        }}
                                                                                    >
                                                                                        <div>
                                                                                            <img
                                                                                                src={item.image1}
                                                                                                alt="productImage"
                                                                                                className={cx(
                                                                                                    'cart-image-product',
                                                                                                )}
                                                                                            ></img>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{
                                                                                                marginTop: 'auto',
                                                                                                marginBottom: 'auto',
                                                                                            }}
                                                                                        >
                                                                                            <span className={cx('item-name')}>
                                                                                                {item.name}
                                                                                            </span>
                                                                                            <div className={cx('product-qty')}>
                                                                                                x {item.qty}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </Link>
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
                                                        <h4 style={{ color: '#ff4d4f', marginTop: '47px', fontSize: '28px' }}>
                                                            Your Order Delivery Status
                                                        </h4>
                                                        {order.isDelivered ? (
                                                            <Alert
                                                                message="Success"
                                                                description={`Delivered at ${order.deliveredAt}`}
                                                                type="success"
                                                            />
                                                        ) : (
                                                            <Alert
                                                                message="Order Delivery Status"
                                                                description="Your order haven't been delivered yet."
                                                                type="warning"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className={cx('payment-method')}>
                                                        <div
                                                            className={cx('heading-s1 space-mb--20')}
                                                            style={{ fontSize: '28px' }}
                                                        >
                                                            <h4 style={{ color: '#ff4d4f', marginTop: '80px' }}>
                                                                Your Payment Process
                                                            </h4>

                                                            {!order.isPaid && order.paymentMethod === "Paypal" && (
                                                                <li>
                                                                    {!sdkReady ? (
                                                                        <div style={{ marginTop: '200px' }}>
                                                                            <Spin size="large" />
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <div className={cx('paypal-button')}>
                                                                                <>
                                                                                    {errorPay && (
                                                                                        <Alert message="Error" description={errorPay} type="error" showIcon />
                                                                                    )}
                                                                                    {loadingPay &&

                                                                                        (
                                                                                            <div style={{ marginTop: '200px' }}>
                                                                                                <Spin size="large" />
                                                                                            </div>
                                                                                        )
                                                                                    }
                                                                                    <PayPalButton
                                                                                        amount={order.totalPrice}
                                                                                        onSuccess={successPaymentHandler}
                                                                                    ></PayPalButton>
                                                                                </>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </li>
                                                            )}

                                                            {order.isPaid ? (
                                                                <div className={cx('alert')}>
                                                                    <Alert
                                                                        message="Success"
                                                                        description={`Paid at ${order.paidAt}`}
                                                                        type="success"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <Alert
                                                                    message="Your Payment Status"
                                                                    description="You haven't paid this order yet."
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
                </>)
            }
        </>
    );
}

export default Order;
