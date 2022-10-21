import classNames from 'classnames/bind';
import { useState } from 'react';
import CheckoutStep from '~/components/CheckoutStep';
import styles from './ShippingAddress.module.scss';
import { Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '~/redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function ShippingAddress() {

  const navigate = useNavigate();

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [billing_address, setbilling_address] = useState('');
  const [billing_address2, setbilling_address2] = useState('');
  const [city, setcity] = useState('');
  const [zipcode, setzipcode] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [note, setnote] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fname, lname, billing_address, billing_address2, city, zipcode, phone, email, note }));
    //TODO: dispatch save shipping address action
    navigate('/payment')
  }



  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>

      <CheckoutStep currentStep="2" />
      <div className={cx('grid wide')}>

        <div className={cx('checkout-content')}>
          <div className={cx('container')}>
            <div className={cx('row')}>
              <div className={cx('col l-6 m-12 c-12')}>
                <div className={cx('shipping-header')}>
                  <div className={cx('heading-s1 space-mb--20')}>
                    <h4>Billing Details</h4>
                  </div>
                  <form>
                    <div className={cx('form-group')}>
                      <input
                        type="text"
                        required=""
                        className={cx('form-control')}
                        name="fname"
                        placeholder="First name *"
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        type="text"
                        required=""
                        className={cx('form-control')}
                        name="lname"
                        placeholder="Last name *"
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <div className={cx('custom_select')}>
                        <select className={cx('form-control')}>
                          <option value="">Select an option...</option>
                          <option value="AX">Aland Islands</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                        </select>
                      </div>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        type="text"
                        className={cx('form-control')}
                        name="billing_address"
                        placeholder="Address *"
                        value={billing_address}
                        onChange={(e) => setbilling_address(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        type="text"
                        className={cx('form-control')}
                        name="billing_address2"
                        placeholder="Address line2"
                        value={billing_address2}
                        onChange={(e) => setbilling_address2(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        className={cx('form-control')}
                        required=""
                        type="text"
                        name="city"
                        placeholder="City / Town *"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        className={cx('form-control')}
                        required=""
                        type="text"
                        name="zipcode"
                        placeholder="Postcode / ZIP *"
                        value={zipcode}
                        onChange={(e) => setzipcode(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        className={cx('form-control')}
                        required=""
                        type="text"
                        name="phone"
                        placeholder="Phone *"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <input
                        className={cx('form-control')}
                        required=""
                        type="text"
                        name="email"
                        placeholder="Email address *"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('heading-s1')}>
                      <h4>Additional information</h4>
                    </div>
                    <div className={cx('form-group')}>
                      <textarea
                        rows="10"
                        className={cx('form-control')}
                        name="note"
                        placeholder="Order notes"
                        style={{ height: "150px" }}
                        value={note}
                        onChange={(e) => setnote(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className={cx('col l-6 m-12 c-12')}>
                <div className={cx('order-review')}>
                  <div className={cx('heading-s1')}>
                    <h4>Your Orders</h4>
                  </div>
                  <div className={cx('table-responsive order_table')}>
                    <table className={cx('table')}>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Lorem ipsum fashion two <span className={cx('product-qty')}>x 1</span>
                          </td>
                          <td>$16.02</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>SubTotal</th>
                          <td className={cx('product-subtotal')}>$16.02</td>
                        </tr>
                        <tr>
                          <th>Shipping</th>
                          <td>Free Shipping</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td className={cx('product-subtotal')}>$16.02</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className={cx('payment-method')}>
                    <div className={cx('heading-s1 space-mb--20')}>
                      <h4>Payment</h4>
                    </div>
                    <div className={cx('payment-option')}>
                      {/* <div className={cx('custom-radio')}>
                        <input 
                        className={cx('form-check-input')} 
                        required="" 
                        type="radio" 
                        name="payment-option" 
                        id="exampleRadios3" 
                        value="option3" 
                        checked=""
                        ></input>
                        <label 
                        className={cx('form-check-label')} 
                        htmlFor="exampleRadios3">Direct Bank Transfer</label>
                        <p 
                        data-method="option3" 
                        className={cx('payment-text')}>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. 
                        </p>
                      </div>
                      <div className={cx('custom-radio space-mb--20')}>
                        <input 
                        className={cx('form-check-input')}
                        type="radio" 
                        name="payment-option" 
                        id="exampleRadios4" 
                        value="option4"
                        ></input>
                        <label className={cx('form-check-label')} htmlFor="exampleRadios4">Check Payment</label>
                        <p 
                        data-method="option4" 
                        className={cx('payment-text')}>
                          Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                        </p>
                      </div>
                      <div className={cx('custom-radio')}>
                        <input 
                        className={cx('form-check-input')} 
                        type="radio" 
                        name="payment-option" 
                        id="exampleRadios5" 
                        value="option5"
                        ></input>
                        <label 
                        className={cx('form-check-label')}
                        htmlFor="exampleRadios5">
                          Paypal
                        </label>
                        <p 
                        data-method="option5" 
                        className={cx('payment-text')}>
                          Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.
                        </p>
                      </div> */}
                      <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                          <Radio value={1}>
                            <h3>Direct Bank Transfer</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p></Radio>
                          <Radio value={2}>
                            <h3>Check Payment</h3>
                            <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                          </Radio>
                          <Radio value={3}>
                            <h3>Paypal</h3>
                            <p>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  </div>
                  <button className={cx('btn btn-fill-out btn-block')} onClick={submitHandler}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default ShippingAddress