import {articleConstants} from '../constants';

const initialState = {
    data: [],
    meta: {
        page: 1
    }
};

const articles = (state = initialState, action) => {
    switch(action.type) {
        case articleConstants.ARTICLES_REQUEST:
            return {
                ...state,
                meta: {
                    ...state.meta,
                    ...action.meta,
                },
                isLoading: true
            };

        case articleConstants.ARTICLES_SUCCESS:
            return {
                data: action.articles.articles,
                meta: {
                    ...action.articles.meta,
                },
                isLoading: false
            };

        case articleConstants.ARTICLES_FAILURE:
            return {};

        case articleConstants.CREATE_ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case articleConstants.CREATE_ARTICLE_SUCCESS:
            return {
                data: [
                    action.article,
                    ...state.data
                ],
                meta: {
                    ...state.meta,
                },
                isLoading: false
            };

        case articleConstants.CREATE_ARTICLE_FAILURE:
            return {};

        case articleConstants.DELETE_ARTICLE_REQUEST:
            return state;

        case articleConstants.DELETE_ARTICLE_SUCCESS:
            return {
                data: [
                    ...state.data.filter((item) => item.id !== action.payload.id)
                ],
                meta: {
                    ...state.meta,
                }
            };

        case articleConstants.DELETE_ARTICLE_FAILURE:
            return {};

        default:
            return state
    }
};

const article = (state = {}, action) => {
    switch (action.type) {
        case articleConstants.ARTICLE_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case articleConstants.ARTICLE_SUCCESS:
            return action.article;

        case articleConstants.ARTICLE_FAILURE:
            return {};

        case articleConstants.UPDATE_ARTICLE_PARAGRAPH:
            return {
                ...state,
                paragraphs: [
                    ...state.paragraphs.slice(0, action.id),
                    {paragraph: action.text},
                    ...state.paragraphs.slice(action.id + 1)
                ]
            };

        default:
            return state
    }
};

export {articles, article}