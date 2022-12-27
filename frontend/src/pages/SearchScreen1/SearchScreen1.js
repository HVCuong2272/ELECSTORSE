// import { Alert, Radio, Space, Spin } from 'antd';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import styles from './SearchScreen1.module.scss';
import classNames from 'classnames/bind';
import { StarIcon } from '~/components/Icons';
import { Pagination } from 'antd';
import SearchProductBreadcrumb from '../Product/components/SearchProductBreadcrumb';

const cx = classNames.bind(styles);

export default function SearchScreen1() {
    return (
        <div style={{ backgroundColor: '#f5f5fa', marginTop: 'var(--subHeader-height)' }}>
            <SearchProductBreadcrumb />

            <div className={cx('grid wide')}>
                <div className="row">
                    <div className="col l-2" style={{ boxShadow: '0 0 0 6px #f5f5fa inset', backgroundColor: 'white' }}>
                        <div className={cx('SideBar')}>
                            <div className={cx('block')}>
                                <div>
                                    <h4 className={cx('title')}>Danh Mục Sản Phẩm</h4>
                                    <div className={cx('list collapsed')}>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingTop: '5px', paddingBottom: '10px' }}
                                        >
                                            Laptop Gaming
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Laptop Truyền Thống
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Bàn Phím Thay Thế Laptop
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Adapter Sạc Laptop
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Pin Thay Thế Laptop
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Skin và Decal Dán Laptop
                                        </div>
                                        <div
                                            className={cx('item', 'item--category')}
                                            style={{ paddingLeft: '0px', paddingBottom: '10px' }}
                                        >
                                            Túi xách &amp; Balo
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('block')}>
                                <h4 className={cx('title')}>Đánh giá</h4>
                                <div className={cx('rating-list')}>
                                    <div className={cx('item')}>
                                        <div className={cx('Stars__Wrapper')}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span className={cx('text')}>từ 5 sao</span>
                                    </div>

                                    <div className={cx('item')}>
                                        <div className={cx('Stars__Wrapper')}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span className={cx('text')}>từ 4 sao</span>
                                    </div>

                                    <div className={cx('item')}>
                                        <div className={cx('Stars__Wrapper')}>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span className={cx('text')}>từ 3 sao</span>
                                    </div>

                                    <div className={cx('item')}>
                                        <div className={cx('Stars__Wrapper')}>
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span className={cx('text')}>từ 2 sao</span>
                                    </div>

                                    <div className={cx('item')}>
                                        <div className={cx('Stars__Wrapper')}>
                                            <StarIcon />
                                        </div>
                                        <span className={cx('text')}>từ 1 sao</span>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('block')}>
                                <h4 className={cx('title')}>Giá</h4>
                                <div className={cx('fast-price-filter')}>
                                    <div className={cx('item')}>
                                        <span>Dưới 20.000.000</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <span className={cx('')}>{`20.000.000 -> 27.000.000`}</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <span className={cx('')}>{`27.000.000 -> 46.000.000`}</span>
                                    </div>
                                    <div className={cx('item')}>
                                        <span className={cx('')}>Trên 46.000.000</span>
                                    </div>
                                </div>
                                <div className={cx('price-small-text')}>Chọn khoảng giá</div>
                                <div className={cx('input-group')}>
                                    {/* <input pattern="[0-9]*" placeholder="Giá từ" value="0"></input> */}
                                    <input></input>
                                    <span>-</span>
                                    {/* <input pattern="[0-9]*" placeholder="Giá đến" value="0"></input> */}
                                    <input></input>
                                </div>
                                <button>Áp dụng</button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col l-10"
                        style={{ boxShadow: '0 0 0 6px #f5f5fa inset', backgroundColor: 'white' }}
                    >
                        <div className={cx('banner-search-container')}>
                            <div className={cx('banner-search__header')}>
                                <div className={cx('banner-search__header-ads')}>
                                    <div className={cx('banner-search__header-left')}>
                                        <img
                                            className={cx('banner-search__header-left-logo')}
                                            src="https://salt.tikicdn.com/ts/tka/bd/dc/18/67ae1da2a4b28846f0f154f3a48bef84.png"
                                            alt="LG Official Store"
                                        ></img>
                                        <div className={cx('banner-search__header-left-logo-detail')}>
                                            <div className={cx('banner-search__header-left-logo-detail-text1')}>
                                                Giá Sock Sập Sàn Cùng LG
                                            </div>
                                            <div className={cx('banner-search__header-left-logo-detail-text2')}>
                                                <span className={cx('banner-search__header-left-logo-detail-text2-a')}>
                                                    Tài trợ bởi
                                                </span>{' '}
                                                LG Official Store
                                                <img
                                                    src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/a947733a6dc83eca57abd15ec1560d8e.png"
                                                    alt="official store"
                                                    className={cx('banner-search__header-left-logo-detail-text2-img')}
                                                ></img>
                                                <span
                                                    className={cx('banner-search__header-left-logo-detail-text2-rate')}
                                                >
                                                    {' '}
                                                    4.7/5 stars
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('banner-search__header-right')}>
                                        <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/9d/b2/de/735d17158fa27e9ab548d9c415a0c010.png"
                                            alt="404"
                                        ></img>
                                        <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/9d/b2/de/735d17158fa27e9ab548d9c415a0c010.png"
                                            alt="404"
                                            style={{ marginLeft: '8px' }}
                                        ></img>
                                        <img
                                            src="https://salt.tikicdn.com/cache/280x280/ts/product/9d/b2/de/735d17158fa27e9ab548d9c415a0c010.png"
                                            alt="404"
                                            style={{ marginLeft: '8px' }}
                                        ></img>
                                    </div>
                                </div>
                                <div className={cx('banner-search__header-ads-button-container')}>
                                    <div className={cx('banner-search__header-ads-button')}>Xem thêm</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-list-container')}>
                            <div className={cx('row')}>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col l-2-4">
                                    <div className={cx('product-item')} style={{ height: '100%' }}>
                                        <div className={cx('thumbnail')}>
                                            <img
                                                src="https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png"
                                                alt="404"
                                                className={cx('styles__StyledDynamicIconBadge-sc-cxexs7-0 hdozRK')}
                                                style={{ width: '68px', height: '14px', top: '0px', left: '0px' }}
                                            ></img>
                                            <div className={cx('product-image-container')}>
                                                <picture className={cx('product-image')}>
                                                    <img
                                                        src="https://salt.tikicdn.com/cache/280x280/ts/product/98/be/bf/1aac569c57f9d5db7dd7371330676c3c.jpg"
                                                        alt="Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger Gray)-Hàng chính hãng"
                                                        className={cx('WebImg')}
                                                    ></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className={cx('info')}>
                                            <div className={cx('name')}>
                                                <h3>
                                                    Laptop Asus TUF Gaming F15 FX507ZC-HN124W (Core
                                                    i7-12700H/8GB/512GB/RTX 3050 4GB/15.6-inch FHD/Win 11/Jaeger
                                                    Gray)-Hàng chính hãng
                                                </h3>
                                            </div>

                                            <div className={cx('price-discount')}>
                                                <div className={cx('price-discount__price')}>
                                                    28.990.000 <sup> ₫</sup>
                                                </div>
                                            </div>

                                            <div className={cx('badge-under-rating')}>
                                                <div className={cx('item')}>
                                                    <span>Freeship+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('badge-delivery')}>
                                            <span style={{ color: 'rgb(128, 128, 137)', fontSize: '12px' }}>
                                                Giao thứ 7, ngày 03/12
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'container-pagination'} style={{ marginBottom: '27px' }}>
                            <Pagination
                                current={1}
                                // onChange={handleChangePage}
                                pageSize={15}
                                total={45}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
