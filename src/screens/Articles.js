import React, { Component } from 'react';
import {
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleBlock from '../components/ArticleBlock';
import { articleActions } from '../actions';

class Articles extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticles() {
        const { articles, isLoading } = this.props;
        console.log('loading', isLoading)

        if(isLoading) return <ActivityIndicator size="small" color="#8053ca"/>;

        return (
            articles.map((article) => (
                <ArticleBlock article={article} key={article.id} />
            ))
        )
    }

    render() {
        const {pagination} = this.props;

        return (
            <Wrapper>
                {this.renderArticles()}
            </Wrapper>
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

const Wrapper = styled.ScrollView`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
