import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '~/redux/actions/userActions';
import { Alert, Radio, Space, Spin, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from './UserProfile.module.scss';
import classNames from 'classnames/bind';
import { USER_DETAILS_RESET, USER_UPDATE_PROFILE_RESET } from '~/redux/constants/userConstants';
import { showErrorMessage, showSuccessMessage } from '~/utils/notifyService';

const cx = classNames.bind(styles);
export default function UserProfile() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    // console.log('buggggggggggggggggggggggg', user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success: successUpdate, error: errorUpdate, loading: loadingUpdate } = userUpdateProfile;
    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState();
    // console.log('bug vai ca noi', name, email, avatar);

    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch({ type: USER_UPDATE_PROFILE_RESET });
            dispatch(detailsUser(userInfo._id));
        }
    }, [dispatch, userInfo, userSignin.userInfo]);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch update profile
        if (password !== confirmPassword) {
            // alert('Password and Confirm Pasword are not matched');
            showErrorMessage('Password and Confirm Pasword are not matched')
        } else {
            dispatch(updateUserProfile({ userId: user._id, name, email, password, avatar }));
        }
    };
    return (
        <div>
            <form className={cx('user-profile')} onSubmit={submitHandler}>
                <div>
                    <h1 style={{ fontSize: '28px', marginTop: '60px', marginBottom: '15px' }}>User Profile</h1>
                </div>
                {loading ? (
                    <div style={{ marginTop: '200px' }}>
                        <Spin size="large" />
                    </div>
                ) : error ? (
                    <Alert message="Error" description={error} type="error" showIcon />
                ) : (
                    <>
                        {loadingUpdate && (
                            <div style={{ marginTop: '200px' }}>
                                <Spin size="large" />
                            </div>
                        )}
                        {errorUpdate && <Alert message="Error" description={error} type="error" showIcon />}{' '}
                        {/* {successUpdate && (
                            <Alert
                                message="Success"
                                description="Profile Updated Successfully"
                                type="success"
                                showIcon
                            />
                        )} */}
                        <div>
                            <div className={cx('user-avatar')}>
                                {/* <Avatar size={64} icon={<UserOutlined />} /> */}
                                <label htmlFor="image">
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        onChange={handlePreviewAvatar}
                                        style={{ display: 'none' }}
                                    />
                                    <img
                                        src={
                                            avatar
                                                ? avatar.preview
                                                : user
                                                ? user.avatar
                                                : 'https://lh3.googleusercontent.com/ogw/AOh-ky2cDJHc-NTAFLMLBbT19rsSQA5ltof99w0f85eU=s32-c-mo'
                                        }
                                        alt="sdsd"
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                className={cx('user-profile__input')}
                                id="name"
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                className={cx('user-profile__input')}
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                className={cx('user-profile__input')}
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                className={cx('user-profile__input')}
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label />
                            <button className={cx('btn', 'btn-fill-out', 'btn-block')} type="submit">
                                Update
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}
