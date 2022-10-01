import { Button, Dropdown, Menu, message, Space } from 'antd';
import { ShoppingCartOutlined, MenuOutlined, CaretRightOutlined, HomeOutlined } from '@ant-design/icons';
import styles from './SubHeader.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import SearchBox from '../SearchBox';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);
function SubHeader() {
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const SubHeaderElement = useRef();
    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            if (window.scrollY >= 56) {
                Object.assign(SubHeaderElement.current.style, {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    zIndex: 999999,
                });
            } else {
                Object.assign(SubHeaderElement.current.style, {
                    position: 'unset',
                });
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            // console.log('Unmounting...');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
    return (
        <div className={cx('sub-header')} ref={SubHeaderElement}>
            <div className="grid wide" style={{ height: '100%' }}>
                <div className={cx('sub-header__container')}>
                    <div className={cx('sub-header__category')}>
                        <div>
                            <Button type="danger" size="middle">
                                <HomeOutlined />
                            </Button>
                        </div>
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
                        <div className={cx('sub-header__actions-cart')}>
                            <ShoppingCartOutlined />
                            <span className={cx('sub-header__actions-cart-notify')}>6</span>
                        </div>
                        <div className={cx('sub-header__actions-signin')}>Sign In</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
