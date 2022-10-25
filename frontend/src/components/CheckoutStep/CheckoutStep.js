import classNames from 'classnames/bind';
import styles from './CheckoutStep.module.scss';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { useState } from 'react';
// import React from 'react';

const cx = classNames.bind(styles);
const { Step } = Steps;

function CheckoutStep(props) {
    console.log(props);
    const [current, setCurrent] = useState(props.currentStep);
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };
    return (
        <div className="grid wide" style={{ marginTop: '60px', height: '100%', backgroundColor: 'white'}}>
            <div className={cx('checkout-steps')}>
                {/* <Steps>
                    <Step status="finish" title="Login" icon={<UserOutlined />} />
                    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                    <Step status="wait" title="Done" icon={<SmileOutlined />} />
                </Steps> */}

                <Steps type="navigation" current={current} onChange={onChange} className="site-navigation-steps">
                    <Step status="finish" title="Login" disabled />
                    <Step status="process" title="Shipping & Payment" icon={<SmileOutlined />} />
                    {/* <Step status="wait" title="Payment" /> */}
                    <Step status="wait" title="Place Order" />
                </Steps>
            </div>
        </div>
    );
}

export default CheckoutStep;
