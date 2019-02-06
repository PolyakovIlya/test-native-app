import { articleConstants } from '../constants';
import { articleService } from '../services';
import { alertActions } from './alert';

const getArticles = (data) => {
    const request = (query) => ({ type: articleConstants.ARTICLES_REQUEST, query });
    const success = (articles) => ({ type: articleConstants.ARTICLES_SUCCESS, articles });
    const failure = (error) => ({ type: articleConstants.ARTICLES_FAILURE, error });

    return (dispatch, getState) => {
        const { page } = data || getState().articles.meta;

        dispatch(request(page));

        articleService.getArticles(page)
            .then(
                articles => {
                    dispatch(success(articles));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const getArticle = (id) => {
    const request = (id) => ({ type: articleConstants.ARTICLE_REQUEST, id });
    const success = (article) => ({ type: articleConstants.ARTICLE_SUCCESS, article });
    const failure = (error) => ({ type: articleConstants.ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        articleService.getArticle(id)
            .then(
                article => {
                    dispatch(success(article));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const createArticle = (data) => {
    const request = (data) => ({ type: articleConstants.CREATE_ARTICLE_REQUEST, data });
    const success = (article) => ({ type: articleConstants.CREATE_ARTICLE_SUCCESS, article });
    const failure = (error) => ({ type: articleConstants.CREATE_ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(data));

        return articleService.createArticle(data)
            .then(
                article => {
                    dispatch(success(article));
                    dispatch(alertActions.addAlert('success', 'Successfully added article!'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.addAlert('error', error.message));
                }
            );
    };
};

const deleteArticle = (id) => {
    const request = (id) => ({ type: articleConstants.DELETE_ARTICLE_REQUEST, id });
    const success = (payload) => ({ type: articleConstants.DELETE_ARTICLE_SUCCESS, payload });
    const failure = (error) => ({ type: articleConstants.DELETE_ARTICLE_FAILURE, error });

    return dispatch => {
        dispatch(request(id));

        articleService.deleteArticle(id)
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

const updateArticleParagraph = (id, text) => {
    return ({ type: articleConstants.UPDATE_ARTICLE_PARAGRAPH, id, text })
};

export const articleActions = {
    getArticles,
    getArticle,
    deleteArticle,
    createArticle,
    updateArticleParagraph
};