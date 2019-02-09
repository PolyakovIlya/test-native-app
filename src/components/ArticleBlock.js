import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/variables';
import { View, Text } from 'react-native';

class ArticleBlock extends Component {
    renderContent() {
        const { article } = this.props;

        if(article && article.paragraphs) {
            const content = article.paragraphs[0].paragraph,
                  length = 140,
                  dots = content.length > length ? '...' : '';

            return (
                <Content selectable>
                    {content.substring(0, length) + dots }
                </Content>
            )
        }

        return null;
    }

    render() {
        const {article, isAdmin} = this.props;

        const url = isAdmin ? `/admin/article/${article.id}` : `/article/${article.id}`;

        return (
            <Article>
                <Title selectable>
                    <Text>{article.title}</Text>
                </Title>
                <Date selectable>Date: {article.createdAt}</Date>
                {this.renderContent()}
            </Article>
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

const Content = styled.Text`
    margin: 2px 0 0 0;
    color: #000;
    text-align: left;
`;

const Article = styled.View`
    width: 300px;
    align-items: center;
    position: relative;
    background: ${colors.colorPrimary};
    border: 1px solid #ededed;
    padding: 6px;
    margin: 10px 0;
`;

const Title = styled.Text`
    color: ${colors.colorSecondary};
    font-size: 18px;
    margin-bottom: 3px;
    padding: 0;
`;

const Date = styled.Text`
    font-size: 14px;
    color: #bcbbc3;
    padding: 0;
`;

export default ArticleBlock;