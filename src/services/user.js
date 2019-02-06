import api from './api';
import { AsyncStorage } from 'react-native';

const login = (username, password) => {
    return api.post(`/users/login`, {user:{username, password}})
        .then(user => {
            if (user.token) {
                AsyncStorage.setItem('user', JSON.stringify({
                    username: user.username,
                    isAdmin: user.isAdmin,
                    email: user.email,
                    token: user.token
                }));
            }

            return user;
        })
};

const register = (data) => {
    return api.post(`/users/register`, {user: data})
        .then(user => {
            return user;
        });
};

const logout = () => {
    AsyncStorage.removeItem('user')
};

export const userService = {
    login,
    register,
    logout
};
