import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('grid wide footer__content')}>
                <div className={cx('row')}>
                    <div className={cx('col l-2-4 m-4 c-6')}>
                        <h3 className={cx('footer__heading')}>CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Trung Tâm Trợ Giúp
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Shop Mall
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Hướng dẫn mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col l-2-4 m-4 c-6')}>
                        <h3 className={cx('footer__heading')}>GIỚI THIỆU</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Giới thiệu
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Tuyển dụng
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Điều khoản
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col l-2-4 m-4 c-6')}>
                        <h3 className={cx('footer__heading')}>DANH MỤC</h3>
                        <ul className={cx('footer-list')}>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Trang điểm mặt
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Trang điểm môi
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    Trang điểm mắt
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col l-2-4 m-4 c-6')}>
                        <h3 className={cx('footer__heading')}>THEO DÕI</h3>
                        <ul className={cx('footer-list', 'footer-list-mobile')}>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    <div className={cx('footer-item__icon')}>
                                        <FacebookOutlined />
                                    </div>
                                    Facebook
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    <div className={cx('footer-item__icon')}>
                                        <InstagramOutlined />
                                    </div>
                                    Instagram
                                </a>
                            </li>
                            <li className={cx('footer-item')}>
                                <a href="/" className={cx('footer-item__link')}>
                                    <div className={cx('footer-item__icon')}>
                                        <LinkedinOutlined />
                                    </div>
                                    Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('col l-2-4 m-8 c-12')}>
                        <h3 className={cx('footer__heading')}>VÀO CỬA HÀNG TRÊN ỨNG DỤNG</h3>
                        <div className={cx('footer__download')}>
                            <img
                                src="/assets/images/footer/qr_code.png"
                                alt="Download QR"
                                className={cx('footer__download-qr')}
                            />
                            <div className={cx('footer__download-apps')}>
                                <a href="/" className={cx('footer__download-app-link')}>
                                    <img
                                        src="/assets/images/footer/google_play.png"
                                        alt="Google play"
                                        className={cx('footer__download-app-img')}
                                    />
                                </a>
                                <a href="/" className={cx('footer__download-app-link')}>
                                    <img
                                        src="/assets/images/footer/app_store.png"
                                        alt="App store"
                                        className={cx('footer__download-app-img')}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('footer__bottom')}>
                <div className={cx('grid wide')}>
                    <p className={cx('footer__text')}>© 2022 - Bản quyền thuộc về Ecommerce Group</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
