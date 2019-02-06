import React, { Component } from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { articleActions } from '../actions';
import './Pagination.scss';

class Pagination extends Component {
    renderPrevious() {
        const { page } = this.props.pagination;

        return(
            <button onClick={() => this.goToPage({page: page - 1})} disabled={page === 1} className="btn prev-btn"/>
        )
    }

    renderNext() {
        const { page, pages } = this.props.pagination;

        return(
            <button onClick={() => this.goToPage({page: page + 1})} disabled={page === pages} className="btn next-btn"/>
        )
    }

    goToPage(i) {
        const { dispatch }= this.props;
        dispatch(articleActions.getArticles(i));
    }

    renderRange() {
        const { pages, page } = this.props.pagination;

        const truncAfter = (pages - page) >= 3;
        const truncBefore = Math.abs(1 - page) >= 3;

        let list = [];
        let prefix = null,
            postfix = null;

        for (let i = (page === 1) ? page : page - 1, index = 0; i <= pages; i++, index++) {
            if(truncAfter && index > 2) break;

            list.push(
                <li onClick={() => this.goToPage({page: i})}
                    className={i === page ? 'btn active' : 'btn'} key={i}>
                    {i}
                </li>
            );
        }

        if(truncAfter) {
            postfix = (
                <div className="postfix">
                    <span className="trunc">...</span>
                    <li className="btn" onClick={() => this.goToPage({page: pages})} key={pages}>{pages}</li>
                </div>
            )
        }

        if(truncBefore) {
            prefix = (
                <div className="postfix">
                    <li className="btn" onClick={() => this.goToPage({page: 1})} key={1}>{1}</li>
                    <span className="trunc">...</span>
                </div>
            )
        }

        return(
            <ul className="list">
                {prefix}
                {list}
                {postfix}
            </ul>
        )
    }

    render() {
        const { pages } = this.props.pagination;
        if (pages <= 1) return null;

        return (
            <div className="pagination">
                {this.renderPrevious()}
                {this.renderRange()}
                {this.renderNext()}
            </div>
        );
    }
}

Pagination.propTypes = {
    pagination: PropTypes.shape().isRequired
};

export default connect()(Pagination);