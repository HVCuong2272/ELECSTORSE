import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import styles from './Carousel.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const content = [
    {
        title: 'Apple Watch SE 2022',
        description: 'Get up to 10% Off Today when bought with iphone 14',
        button: 'Shop Now',
        image: 'https://file.hstatic.net/200000097009/collection/cate_magsafe_bf188dbae3734bb981720b7a2c5d34fa.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png',
    },
    {
        title: 'Smart Phones',
        description: '40% Off in All Products',
        button: 'Discover',
        image: 'https://parliamenthouse-hotel.co.uk/wp-content/uploads/2022/05/Travel-Apps-1920x500.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png',
    },
    {
        title: 'Headphone',
        description: 'Taking your Listening Experience to Next Level',
        button: 'Buy now',
        image: 'https://letstalk-tech.s3.amazonaws.com/wp-content/uploads/2014/07/HoM-Liberate-Headphones.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png',
    },
    {
        title: 'Smart Phones',
        description: '40% Off in All Products',
        button: 'Discover',
        image: 'https://s247.vn/web/dien-thoai-may-tinh/images/revolution-slider/slide1-bg.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png',
    },
];

const Carousel = () => {
    function MouseOver(event) {
        var prevBtn = document.querySelector('.previousButton');
        Object.assign(prevBtn.style, {
            visibility: 'visible',
            opacity: 1,
            transition: 'opacity 1s ease',
        });
        var nextBtn = document.querySelector('.nextButton');
        Object.assign(nextBtn.style, {
            visibility: 'visible',
            opacity: 1,
            transition: 'opacity 1s ease',
        });
    }
    function MouseOut(event) {
        var prevBtn = document.querySelector('.previousButton');
        Object.assign(prevBtn.style, {
            visibility: 'hidden',
            opacity: 0,
            transition: 'opacity 1s ease',
        });
        var nextBtn = document.querySelector('.nextButton');
        Object.assign(nextBtn.style, {
            visibility: 'hidden',
            opacity: 0,
            transition: 'opacity 1s ease',
        });
    }
    return (
        <div className={cx('carousel-container')} onMouseOver={MouseOver} onMouseOut={MouseOut}>
            <Slider className={cx('slider-wrapper')} infinite={true} autoplay={2000}>
                {content.map((item, index) => (
                    <div
                        key={index}
                        className={cx('slider-content')}
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className={cx('inner')}>
                            <div className={cx('inner-1')}>
                                <div>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <h1>{item.title}</h1>
                                </div>
                                <div style={{ marginTop: 10 }}>
                                    <button className={cx('button1')}>{item.button}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
