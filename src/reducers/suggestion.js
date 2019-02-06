import {suggestionConstants} from "../constants";

const initialState = [];

const suggestions = (state = initialState, action) => {
    switch(action.type) {
        case suggestionConstants.GET_SUGGESTIONS_REQUEST:
            return state;

        case suggestionConstants.GET_SUGGESTIONS_SUCCESS:
            return action.suggestions;

        case suggestionConstants.GET_SUGGESTIONS_FAILURE:
            return {};

        case suggestionConstants.CREATE_SUGGESTION_REQUEST:
            return state;

        case suggestionConstants.CREATE_SUGGESTION_SUCCESS:
            return state;

        case suggestionConstants.CREATE_SUGGESTION_FAILURE:
            return {};

        case suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_REQUEST:
            return state;

        case suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_SUCCESS:
            return action.suggestions;

        case suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_FAILURE:
            return {};

        case suggestionConstants.UPDATE_SUGGESTION_REQUEST:
            return state;

        case suggestionConstants.UPDATE_SUGGESTION_SUCCESS:
            return state.map((item) => {
                if (item.id !== action.payload.data.id) {
                    return item
                }

                return {
                    ...item,
                    ...action.payload.data
                }
            });

        case suggestionConstants.UPDATE_SUGGESTION_FAILURE:
            return {};

        case suggestionConstants.REMOVE_SUGGESTION_REQUEST:
            return state;

        case suggestionConstants.REMOVE_SUGGESTION_SUCCESS:
            return state.filter((item) => (item.id !== action.data.id));

        case suggestionConstants.REMOVE_SUGGESTION_FAILURE:
            return {};

        default:
            return state
    }
};

const suggestionFilter = (state = 'all', action) => {
    switch (action.type) {
        case suggestionConstants.SET_SUGGESTION_FILTER:
            return action.status;
        default:
            return state
    }
};


export { suggestions, suggestionFilter };