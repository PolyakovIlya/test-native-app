import { suggestionConstants } from '../constants';
import { suggestionService } from '../services';
import { alertActions } from './alert';

const createSuggestion = (id, data) => {
    const request = (id, data) => ({ type: suggestionConstants.CREATE_SUGGESTION_REQUEST, id, data });
    const success = (suggestion) => ({ type: suggestionConstants.CREATE_SUGGESTION_SUCCESS, suggestion });
    const failure = (error) => ({ type: suggestionConstants.CREATE_SUGGESTION_FAILURE, error });

    return dispatch => {
        dispatch(request(id, data));

        return suggestionService.createSuggestion(id, data)
            .then(
                suggestion => {
                    dispatch(success(suggestion));
                    dispatch(alertActions.addAlert('success', suggestion.message));
                    return suggestion
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const updateSuggestion = (id, status) => {
    const request = (id, status) => ({ type: suggestionConstants.UPDATE_SUGGESTION_REQUEST, id, status });
    const success = (payload) => ({ type: suggestionConstants.UPDATE_SUGGESTION_SUCCESS, payload });
    const failure = (error) => ({ type: suggestionConstants.UPDATE_SUGGESTION_FAILURE, error });

    return dispatch => {
        dispatch(request(id, status));

        return suggestionService.updateSuggestion(id, status)
            .then(
                payload => {
                    dispatch(success(payload));
                    dispatch(alertActions.addAlert('success', payload.message));
                    return payload;
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const getSuggestions = () => {
    const request = () => ({ type: suggestionConstants.GET_SUGGESTIONS_REQUEST });
    const success = (suggestions) => ({ type: suggestionConstants.GET_SUGGESTIONS_SUCCESS, suggestions });
    const failure = (error) => ({ type: suggestionConstants.GET_SUGGESTIONS_FAILURE, error });

    return dispatch => {
        dispatch(request());

        suggestionService.getSuggestions()
            .then(
                suggestions => {
                    dispatch(success(suggestions));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const getSuggestionsByArticle = (id) => {
    const request = (id) => ({ type: suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_REQUEST, id });
    const success = (suggestions) => ({ type: suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_SUCCESS, suggestions });
    const failure = (error) => ({ type: suggestionConstants.GET_SUGGESTIONS_BY_ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        suggestionService.getSuggestionsByArticle(id)
            .then(
                suggestions => {
                    dispatch(success(suggestions));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const removeSuggestion = (id) => {
    const request = (id) => ({ type: suggestionConstants.REMOVE_SUGGESTION_REQUEST, id });
    const success = (data) => ({ type: suggestionConstants.REMOVE_SUGGESTION_SUCCESS, data });
    const failure = (error) => ({ type: suggestionConstants.REMOVE_SUGGESTION_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        return suggestionService.removeSuggestion(id)
            .then(
                payload => {
                    dispatch(success(payload));
                    dispatch(alertActions.addAlert('success', payload.message));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const setSuggestionFilter = (status) => ({ type: suggestionConstants.SET_SUGGESTION_FILTER, status });

export const suggestionActions = {
    createSuggestion,
    getSuggestionsByArticle,
    removeSuggestion,
    getSuggestions,
    updateSuggestion,
    setSuggestionFilter
};

