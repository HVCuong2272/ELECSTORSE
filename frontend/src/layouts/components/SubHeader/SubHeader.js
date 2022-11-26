import { Button, Dropdown, Menu, message, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined, MenuOutlined, CaretRightOutlined, HomeOutlined } from '@ant-design/icons';
import styles from './SubHeader.module.scss';
import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../SearchBox';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_RESET_ITEM } from '~/redux/constants/cartConstants';
import { signout } from '~/redux/actions/userActions';

const cx = classNames.bind(styles);
function SubHeader({ isHomePage }) {
    // console.log('init subheder');
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    // console.log(userInfo);

    const dispatch = useDispatch();
    const SubHeaderElement = useRef();
    useEffect(() => {
        const handleScroll = () => {
            // console.log('ssss', window.scrollY);
            // if(window.innerWidth)
            if (window.scrollY >= 56) {
                Object.assign(SubHeaderElement.current.style, {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    zIndex: 2,
                });
            } else {
                Object.assign(SubHeaderElement.current.style, {
                    position: 'unset',
                });
            }
        };
        if (isHomePage) {
            window.addEventListener('scroll', handleScroll);
        } else {
            Object.assign(SubHeaderElement.current.style, {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                zIndex: 2,
            });
        }

        return () => {
            // console.log('Unmounting...');
            if (isHomePage) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        // console.log('click', e);
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '1st menu item',
                    key: '1',
                    icon: <CaretRightOutlined />,
                },
                {
                    label: '2nd menu item',
                    key: '2',
                    icon: <CaretRightOutlined />,
                },
                {
                    label: '3rd menu item',
                    key: '3',
                    icon: <CaretRightOutlined />,
                },
            ]}
        />
    );

    const handleClickUserMenuProfile = ({ key }) => {
        // message.info(`Click on item ${key}`);
        if (key === '3') {
            dispatch(signout());
        } else if (key === '2') {
            navigate('/orderhistory');
        } else if (key === '1') {
            navigate('/profile');
        }
    };
    const menuProfile = (
        <Menu
            onClick={handleClickUserMenuProfile}
            items={[
                {
                    label: 'Profile',
                    key: '1',
                },
                {
                    label: 'Order History',
                    key: '2',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'Logout',
                    key: '3',
                },
            ]}
        />
    );
    const handleClickAdminMenuProfile = ({ key }) => {
        // message.info(`Click on item ${key}`);
        if (key === '4') {
            dispatch(signout());
        } else if (key === '1') {
            navigate('/profile');
        } else if (key === '2') {
            navigate('/productmanagement');
        } else if (key === '3') {
            navigate('/orderlist');
        }
    };
    const menuAdminProfile = (
        <Menu
            onClick={handleClickAdminMenuProfile}
            items={[
                {
                    label: 'Profile',
                    key: '1',
                },
                {
                    label: 'Product Management',
                    key: '2',
                },
                {
                    label: 'Order Management',
                    key: '3',
                },
                // {
                //     key: '5',
                //     label: 'disabled sub menu',
                //     disabled: true,
                //     children: [
                //         {
                //             key: '5-1',
                //             label: '5d menu item',
                //         },
                //         {
                //             key: '5-2',
                //             label: '6th menu item',
                //         },
                //     ],
                // },
                {
                    type: 'divider',
                },
                {
                    label: 'Logout',
                    key: '4',
                },
            ]}
        />
    );
    return (
        <div className={cx('sub-header')} ref={SubHeaderElement}>
            <div className="grid wide" style={{ height: '100%' }}>
                <div className={cx('sub-header__container')}>
                    <div className={cx('sub-header__category')}>
                        <Link to="/">
                            <Button type="danger" size="middle">
                                <HomeOutlined />
                            </Button>
                        </Link>
                        <div className={cx('sub-header__category-btn')}>
                            <Dropdown overlay={menu}>
                                <Button type="danger">
                                    <Space>
                                        <MenuOutlined />
                                        Categories
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                        <div className={cx('sub-header__category-btn-mobile')}>
                            <Dropdown overlay={menu}>
                                <Button type="danger">
                                    <Space>
                                        <MenuOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                    <SearchBox />
                    <div className={cx('sub-header__actions')}>
                        <Link
                            to="/cart"
                            className={cx('sub-header__actions-cart')}
                            onClick={() => {
                                dispatch({ type: CART_RESET_ITEM });
                            }}
                        >
                            <ShoppingCartOutlined />
                            {cartItems.length > 0 && (
                                <span className={cx('sub-header__actions-cart-notify')}> {cartItems.length}</span>
                            )}
                        </Link>
                        {userInfo ? (
                            userInfo.isAdmin === false ? (
                                <div className={cx('sub-header__info-container')}>
                                    <Dropdown overlay={menuProfile} placement="bottomRight" arrow>
                                        <a
                                            href="/"
                                            onClick={(e) => e.preventDefault()}
                                            className={cx('sub-header__info-user-name')}
                                        >
                                            <img
                                                src={userInfo.avatar}
                                                alt=""
                                                className={cx('sub-header__info-user-img')}
                                            />
                                            {userInfo.name}
                                        </a>
                                    </Dropdown>
                                </div>
                            ) : (
                                <div className={cx('sub-header__info-container')}>
                                    <Dropdown overlay={menuAdminProfile} placement="bottomRight" arrow>
                                        <a
                                            href="/"
                                            onClick={(e) => e.preventDefault()}
                                            className={cx('sub-header__info-user-name')}
                                        >
                                            <img
                                                src={userInfo.avatar}
                                                alt=""
                                                className={cx('sub-header__info-user-img')}
                                            />
                                            {userInfo.name}
                                        </a>
                                    </Dropdown>
                                </div>
                            )
                        ) : (
                            <Link to="/signin" className={cx('sub-header__actions-signin')}>
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
