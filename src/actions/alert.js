import { alertConstants } from '../constants';

let id = 0;

const addAlert = (errorType, text) => {
    const payload = {
        id: id++,
        errorType,
        text
    };

    return ({ type: alertConstants.ADD_ALERT, payload });
};

const removeAlert = (id) => ({ type: alertConstants.REMOVE_ALERT, id });

export const alertActions = {
    addAlert,
    removeAlert
};