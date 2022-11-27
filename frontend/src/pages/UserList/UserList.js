import { Alert, Spin } from 'antd';
import React from 'react';
import classNames from 'classnames/bind';
import styles from './UserList.module.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, listUsers } from '~/redux/actions/userActions';
import { USER_DETAILS_RESET } from '~/redux/constants/userConstants';
import { USER_DELETE_RESET } from '~/redux/constants/userConstants';

const cx = classNames.bind(styles);

function UserList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    const userList = useSelector((state) => state.userList);
    const { loading, error, users } = userList;

    const userDelete = useSelector((state) => state.userDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = userDelete;

    // useEffect(() => {
    //     dispatch({ type: USER_DELETE_RESET });
    // }, []);
    useEffect(() => {
        if (userSignin.userInfo) {
            dispatch(listUsers());
            dispatch({ type: USER_DETAILS_RESET });
        }
    }, [dispatch, userSignin.userInfo, successDelete]);

    const deleteHandler = (user) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteUser(user._id));
        }
    };

    return (
        <div className={cx('user-management-container')}>
            <h1>Users</h1>

            {loadingDelete && <Spin size="large" />}
            {/* {errorDelete && (
                <Alert
                    message="Error"
                    style={{ width: '100%', margin: '0 30px 30px' }}
                    description={errorDelete}
                    type="error"
                    showIcon
                />
            )} */}
            {/* {successDelete && (
                <Alert
                    message="User Delete Successfully"
                    style={{ width: '100%', margin: '0 30px 30px' }}
                    description={successDelete}
                    type="success"
                    showIcon
                />
            )} */}

            {loading ? (
                <div style={{ marginTop: '200px' }}>
                    <Spin size="large" />
                </div>
            ) : error ? (
                <Alert message="Error" description={error} type="error" showIcon />
            ) : (
                <table className={cx('user-management-table')}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>IS SELLER</th>
                            <th>IS ADMIN</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.isSeller ? 'YES' : 'NO'}</td>
                                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                                <td>
                                    <button
                                        className={cx('btn', 'btn-fill-out', 'btn-block')}
                                        style={{ width: '100%', height: '50%' }}
                                        onClick={() => navigate(`/user/${user._id}/edit`)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className={cx('btn', 'btn-fill-out', 'btn-block')}
                                        style={{ width: '100%', height: '50%' }}
                                        onClick={() => deleteHandler(user)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserList;
