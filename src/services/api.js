import config from '../config/config';
import { AsyncStorage } from 'react-native';

const headers = async () => {
    const h = new Headers();
    h.append('Content-Type', 'application/json');

    const token = await AsyncStorage.getItem('token');

    if(token) {
        h.append('x-access-token', token);
    }

    return h;
};

const request = async (method, path, body) => {
    const url = `${config.apiUrl}${path}`;
    const options = { method, headers: await headers()};

    if(body) {
        options.body = JSON.stringify(body);
    }

    return fetch(url, options)
        .then(handleResponse)
        .then(response => response);
};

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.error) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
};

const api = {
    get(path) {
        return request('GET', path);
    },
    post(path, data = {}) {
        return request('POST', path, data);
    },
    put(path, data = {}) {
        return request('PUT', path, data);
    },
    delete(path) {
        return request('DELETE', path);
    }
};

export default api;