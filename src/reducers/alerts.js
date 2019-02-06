import {alertConstants} from '../constants';

const alerts = (state = [], action) => {
    const { payload } = action;

    switch (action.type) {
        case alertConstants.ADD_ALERT:
            return [
                ...state,
                {
                    id: payload.id,
                    errorType: payload.errorType,
                    text: payload.text
                }
            ];

        case alertConstants.REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.id);

        default:
            return state;
    }
};

export default alerts;
