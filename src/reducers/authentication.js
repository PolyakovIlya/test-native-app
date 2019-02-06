import {userConstants} from "../constants";
import { AsyncStorage } from 'react-native';

let user = AsyncStorage.getItem('user');
const initialState = user ? { user } : {};

const authentication = (state = initialState, action) => {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                user: action.user
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                user: action.user
            }
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state
    }
}

export default authentication