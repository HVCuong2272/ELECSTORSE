import classNames from 'classnames/bind';
import { useState } from 'react';
import CheckoutStep from '~/components/CheckoutStep';
import styles from './ShippingAddress.module.scss';
import { Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod, saveShippingAddress } from '~/redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import {VisaIcon, MasterCardIcon, MomoIcon, PaypalIcon} from '~/components/Icons';

const cx = classNames.bind(styles);

const countryList = {
  "": "Select your country...",
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua and Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas (the)",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia (Plurinational State of)",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory (the)",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "CV": "Cabo Verde",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "KY": "Cayman Islands (the)",
  "CF": "Central African Republic (the)",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands (the)",
  "CO": "Colombia",
  "KM": "Comoros (the)",
  "CD": "Congo (the Democratic Republic of the)",
  "CG": "Congo (the)",
  "CK": "Cook Islands (the)",
  "CR": "Costa Rica",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CY": "Cyprus",
  "CZ": "Czechia",
  "CI": "Côte d'Ivoire",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic (the)",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "SZ": "Eswatini",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (the) [Malvinas]",
  "FO": "Faroe Islands (the)",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories (the)",
  "GA": "Gabon",
  "GM": "Gambia (the)",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island and McDonald Islands",
  "VA": "Holy See (the)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran (Islamic Republic of)",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "Korea (the Democratic People's Republic of)",
  "KR": "Korea (the Republic of)",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic (the)",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands (the)",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia (Federated States of)",
  "MD": "Moldova (the Republic of)",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands (the)",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger (the)",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands (the)",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestine, State of",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines (the)",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "MK": "Republic of North Macedonia",
  "RO": "Romania",
  "RU": "Russian Federation (the)",
  "RW": "Rwanda",
  "RE": "Réunion",
  "BL": "Saint Barthélemy",
  "SH": "Saint Helena, Ascension and Tristan da Cunha",
  "KN": "Saint Kitts and Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin (French part)",
  "PM": "Saint Pierre and Miquelon",
  "VC": "Saint Vincent and the Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten (Dutch part)",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia and the South Sandwich Islands",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan (the)",
  "SR": "Suriname",
  "SJ": "Svalbard and Jan Mayen",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania, United Republic of",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad and Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks and Caicos Islands (the)",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates (the)",
  "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
  "UM": "United States Minor Outlying Islands (the)",
  "US": "United States of America (the)",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela (Bolivarian Republic of)",
  "VN": "Viet Nam",
  "VG": "Virgin Islands (British)",
  "VI": "Virgin Islands (U.S.)",
  "WF": "Wallis and Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe",
  "AX": "Åland Islands"
};

function ShippingAddress() {
  // console.log(Object.keys(countryList));

  const navigate = useNavigate();

  const cart = useSelector(state => state.cart)
  const {shippingAddress,paymentMethod:paymentMethodInStore} = cart;

  const [fname, setfname] = useState(shippingAddress ? shippingAddress.fname : "");
  const [lname, setlname] = useState(shippingAddress ? shippingAddress.lname : "");
  const [billing_address, setbilling_address] = useState(shippingAddress ? shippingAddress.billing_address : "");
  const [billing_address2, setbilling_address2] = useState(shippingAddress ? shippingAddress.billing_address2 : "");
  const [city, setcity] = useState(shippingAddress ? shippingAddress.city : "");
  const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : "");
  const [zipcode, setzipcode] = useState(shippingAddress ? shippingAddress.zipcode : "");
  const [phone, setphone] = useState(shippingAddress ? shippingAddress.phone : "");
  const [email, setemail] = useState(shippingAddress ? shippingAddress.email : "");
  const [note, setnote] = useState(shippingAddress ? shippingAddress.note : "");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ fname, lname,country, billing_address, billing_address2, city, zipcode, phone, email, note }));
    //TODO: dispatch save shipping address action
    // navigate('/payment') 
  }

  
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodInStore || "Card");
  const onChangePaymentMethod = (e) => {
    console.log('radio checked', e.target.value);
    setPaymentMethod(e.target.value);
    dispatch(savePaymentMethod(e.target.value));
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
                  <div className={cx('heading-s1 space-mb--20')} >
                    <h4 style={{fontSize:'28px', marginTop:'15px', marginBottom:'15px'}}>Billing Details</h4>
                  </div>
                  <form>
                    <div className={cx('form-group')}>
                      <input
                        type="text"
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
                        className={cx('form-control')}
                        name="lname"
                        placeholder="Last name *"
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
                      ></input>
                    </div>
                    <div className={cx('form-group')}>
                      <div className={cx('custom_select')}>
                        <select className={cx('form-control')} style={{height:'50px'}}
                        onChange={e => setCountry(e.target.value)} value={country}>
                          {Object.keys(countryList).map((countryKey,index) => {
                            return <option key={index} value={countryKey}>{countryList[countryKey]} </option>
                          })}
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
                    <div className={cx('heading-s1 space-mb--20')} style={{fontSize:'22px'}}>
                      <h4>Additional information</h4>
                    </div>
                    <div className={cx('form-group') }>
                      <textarea 
                      rows="10" 
                      className={cx('form-control')} 
                      name="note"
                      placeholder="Order notes"
                      style={{height:"120px",resize:'none'}}
                      value={note}
                      onChange={(e) => setnote(e.target.value)}

                      ></textarea>
                    </div>
                  </form>
                </div>
              </div>
              <div className={cx('col l-6 m-12 c-12')}>
                <div className={cx('order-review')}>
                  <div className={cx('heading-s1 space-mb--20')}>
                    <h4 style={{fontSize:'28px'}}>Your Orders</h4>
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
                    <div className={cx('heading-s1 space-mb--20')} style={{fontSize:'28px'}}>
                      <h4>Payment</h4>
                    </div>
                    <div className={cx('payment-option')}>
                      <Radio.Group onChange={onChangePaymentMethod} value={paymentMethod}>
                        <Space direction="vertical">
                          <Radio value={'Card'}>
                            <h3> 
                              <span> <VisaIcon/></span>
                              <span style={{marginLeft: 10}}><MasterCardIcon/></span> 
                              <span style={{marginLeft: 10}}>Visa or Master Card</span>
                            </h3>
                            <p>We accepts major credit and debit cards.</p>
                          </Radio>
                          <Radio value={'Momo'}>
                            <h3> <span><MomoIcon/></span> Momo</h3>
                            <p>We also accepts payment using momo</p>
                          </Radio>
                          <Radio value={'Paypal'}>
                            <h3> <span><PaypalIcon/></span>Paypal</h3>
                            <p>Pay via PayPal; you can pay with your credit card/momo if you don't have a PayPal account.</p>
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  </div>
                  <button className={cx('btn','btn-fill-out','btn-block')} style={{width:'100%', height:'50%'}} onClick={submitHandler}>
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