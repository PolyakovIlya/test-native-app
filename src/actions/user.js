import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './alert';

const login = (username, password) => {
    const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
    const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request({ username }));

        return userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            )
    };
};

const logout = () => {
    return dispatch => {
        dispatch({type: userConstants.LOGOUT});

        return userService.logout();
    };
};

const register = (data) => {
    const request = (user) => ({ type: userConstants.LOGIN_REQUEST, user });
    const success = (user) => ({ type: userConstants.LOGIN_SUCCESS, user });
    const failure = (error) => ({ type: userConstants.LOGIN_FAILURE, error });

    return dispatch => {
        dispatch(request(data));

        return userService.register(data)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

export const userActions = {
    login,
    register,
    logout
};
