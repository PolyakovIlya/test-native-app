import api from './api';

const createSuggestion = (data) => {
    return api.post(`/suggestions`, {suggestion: data})
        .then(suggestion => {
            return suggestion;
        });
};

const getSuggestions = () => {
    return api.get(`/suggestions`)
        .then(suggestions => {
            return suggestions;
        });
};

const updateSuggestion = (id, status) => {
    return api.put(`/suggestions/${id}`, {status})
        .then(payload => {
            return payload;
        });
};

const getSuggestionsByArticle = (id) => {
    return api.get(`/suggestions/${id}`)
        .then(suggestions => {
            return suggestions;
        });
};

const removeSuggestion = (id) => {
    return api.delete(`/suggestions/${id}`)
        .then(payload => {
            return payload;
        });
};

export const suggestionService = {
    createSuggestion,
    getSuggestionsByArticle,
    getSuggestions,
    updateSuggestion,
    removeSuggestion
};