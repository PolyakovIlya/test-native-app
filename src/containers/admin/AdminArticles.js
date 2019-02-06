import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions } from '../../actions';
import ArticleBlock from '../../components/ArticleBlock';
import Pagination from '../../components/Pagination';
import './AdminArticles.scss'
import Loader from '../../components/Loader';

class AdminArticles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        };
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    onClickDelete(id) {
        const {dispatch} = this.props;
        dispatch(articleActions.deleteArticle(id));
    }

    renderArticles() {
        const { user, articles, isLoading } = this.props;

        if(isLoading) return <Loader/>;

        return (
            articles.map((article, index) => (
                <ArticleBlock
                    article={article}
                    isAdmin={user.isAdmin}
                    key={index}
                    handleDelete={this.onClickDelete.bind(this)}
                />
            ))
        )
    }

    onInputUrl = (e) => {
        const {value} = e.target;
        this.setState({url: value})
    }

    onSubmitArticleForm = (e) => {
        e.preventDefault();

        const {dispatch} = this.props;
        const {url} = this.state;

        dispatch(articleActions.createArticle(url)).then(() => {
            this.setState({url: ''});
        });
    }

    renderAddArticleForm() {
        return (
            <div className="articleForm">
                <form name="from" onSubmit={this.onSubmitArticleForm}>
                    <input
                        type="text"
                        className="inputForm"
                        name="url"
                        value={this.state.url}
                        onChange={this.onInputUrl}
                        placeholder="Enter article url"
                    />
                    <button type="submit" className="button addButton">Add</button>
                </form>
            </div>
        );
    }

    render() {
        const {pagination} = this.props;

        return (
            <div className="container">
                {this.renderAddArticleForm()}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminArticles);