import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ArticleBlock.scss';

class ArticleBlock extends Component {
    renderContent() {
        const { article } = this.props;

        if(article && article.paragraphs) {
            const content = article.paragraphs[0].paragraph,
                  length = 180,
                  dots = content.length > length ? '...' : '';

            return (
                <div className="content">
                    {content.substring(0, length) + dots }
                </div>
            )
        }

        return null;
    }

    renderDelete() {
        const { isAdmin, article, handleDelete } = this.props;

        if(!isAdmin) return null;

        return <div className="deleteCross" onClick={() => handleDelete(article.id)}/>
    }

    render() {
        const {article, isAdmin} = this.props;

        const url = isAdmin ? `/admin/article/${article.id}` : `/article/${article.id}`;

        return (
            <div className="article">
                <div className="title">
                    <Link to={url} className="link">{article.title}</Link>
                </div>
                <div className="date">Date: {article.createdAt}</div>
                {this.renderContent()}
                {this.renderDelete()}
            </div>
        )
    }
}

ArticleBlock.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string,
        paragraphs: PropTypes.array.isRequired
    }).isRequired,
    isAdmin: PropTypes.bool,
    handleDelete: PropTypes.func
};

export default ArticleBlock;