import { RightOutlined, LeftOutlined,StarOutlined } from '@ant-design/icons';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Product = () => {
    let span = document.querySelectorAll('.button-control-product-list svg');
    let product = document.querySelectorAll(`.${styles.product}`);
let product_page = Math.ceil(product.length/4);
let l=0;
let movePer = 25.34;
let maxMove = 203;

//Mobile view
let mobile_view = window.matchMedia("(max-width: 768px)");
if (mobile_view.matches){
    movePer = 50.36;
    maxMove = 504;
}

let right_move = ()=>{
    l=l+movePer;
    if(product === 1) {l=0}
    for(const i of product)
    {
        if(l > maxMove){l=l-movePer;}
        i.style.left = '-' + l +'%';
    }
}
let left_move = ()=>{
    l=l-movePer;
    if(l <= 0) {l=0}
    for(const i of product)
    {
        if(product_page>1)
        i.style.left = '-' + l +'%';
    }
}
span[1].onclick = ()=>{right_move();}
span[0].onclick = ()=>{left_move();}
    return (
        <main>
            <div className={cx('text')}>
                <h1>
                    Simple single Carousel
                </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, harum?</p>
            </div>
            <header>
                <h1>Top Hottest Product</h1>
                <div>
                <LeftOutlined className={cx('button-control-product-list')}/>
                <RightOutlined className={cx('button-control-product-list')}/>
                </div>
            </header>
            <section>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One1</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One2</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One3</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One4</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One5</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One6</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One6</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
                <div className={cx('product')}>
                    <picture>
                        <img src="/assets/images/productImage/banner1.png" alt="" />
                    </picture>
                    <div className={cx('details')}>
                        <p>
                            <b>Product One7</b>
                            <small>New arrival</small>
                        </p>
                        <samp>$45.00</samp>
                    </div>
                    <div className={cx('button-product-list')}>
                        <p className={cx('star')}>
                        <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                            <StarOutlined />
                        </p>
                        <a href='/' className={cx('button-add-to-cart-product-list')}>Add-cart</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Product;
