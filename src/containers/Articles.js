import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions } from '../actions';
import ArticleBlock from '../components/ArticleBlock';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';
import './Articles.scss';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles() {
        const { articles, isLoading } = this.props;

        if(isLoading) return <Loader/>;

        return (
            articles.map((article) => (
                <ArticleBlock article={article} key={article.id} />
            ))
        )
    }

    render() {
        const {pagination} = this.props;

        return (
            <div className="container">
                {this.renderArticles()}
                <Pagination pagination={pagination}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    articles: state.articles.data,
    pagination: state.articles.meta,
    isLoading: state.articles.isLoading
});

const mapDispatchToProps = (dispatch) => ({
    fetchArticles: () => dispatch(articleActions.getArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);