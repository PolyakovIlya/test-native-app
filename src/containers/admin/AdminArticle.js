import React, {Component} from 'react'
import { connect } from 'react-redux';
import Paragraph from '../../components/Paragraph';
import Suggestion from '../../components/Suggestion';
import { suggestionActions, articleActions } from '../../actions';
import BackBtn from '../../components/BackBtn';

import './AdminArticle.scss';

class AdminArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentParagraph: ''
        }
    }

    componentDidMount() {
        this.props.fetchArticle();
        this.props.fetchSuggestionsByArticle();
    }

    createSuggestion = (suggestion) => {
        const {dispatch} = this.props;
        dispatch(suggestionActions.createSuggestion({...suggestion, status: 'approved'})).then((data) => {
            const { paragraph_id, text } = data.suggestion;
            dispatch(articleActions.updateArticleParagraph(paragraph_id, text));
        });
    }

    renderParagraphList() {
        const {article, user} = this.props;

        if(!article && !article.paragraphs) return null;
        const paragraphs = article.paragraphs || [];

        return (
            paragraphs.map((p, i) => {
                return (
                    <Paragraph
                        isAdmin={user.isAdmin}
                        handleSuggestionCreation={this.createSuggestion.bind(this)}
                        onClickParagraph={() => this.setState({currentParagraph: i})}
                        articleId={this.props.match.params['id']}
                        index={i}
                        key={i}
                        paragraph={p.paragraph}
                    />
                )
            })
        )
    }

    onClickDelete(id) {
        const {dispatch} = this.props;
        dispatch(suggestionActions.removeSuggestion(id));
    }

    onClickStatus(id, status) {
        const {dispatch} = this.props;

        dispatch(suggestionActions.updateSuggestion(id, status)).then((result) => {

            if(status === 'approved') {
                const { paragraph_id, text } = result.data;
                dispatch(articleActions.updateArticleParagraph(paragraph_id, text));
            }
        });
    }

    renderSuggestionsList() {
        const {suggestions} = this.props;

        if(!suggestions) return null;

        if(!suggestions.length) {
            return (
                <h3 className="center notify">There are no suggestions for this paragraph!</h3>
            )
        }

        return (
            suggestions.map((s, i) => {
                // if(s.status !== 'pending') return null;

                if(this.state.currentParagraph !== s.paragraph_id) return null;

                return (
                    <Suggestion
                        key={i}
                        articleId={this.props.match.params['id']}
                        suggestion={s}
                        handleSuggestionDelete={this.onClickDelete.bind(this)}
                        handleSuggestionStatus={this.onClickStatus.bind(this)}
                    />
                )
            })
        )
    }

    renderTitle() {
        const {suggestions} = this.props;

        if(suggestions && !suggestions.article) return null;

        return (<h2 className="center">{suggestions.article.title}</h2>);
    }

    renderParagraphsBlock() {
        return (
            <>
                {this.renderTitle()}
                <h4>Paragraphs:</h4>
                {this.renderParagraphList()}
            </>
        )
    }

    renderSuggestionsBlock() {
        return (
            <>
                <h4 className="center">(click on paragraph to see related suggestions):</h4>
                {this.renderSuggestionsList()}
            </>
        )
    }

    render() {
        return (
            <>
                <BackBtn/>
                <div className="container">
                    <div className="row">
                        <div className="column">
                            {this.renderParagraphsBlock()}
                        </div>
                        <div className="column">
                            {this.renderSuggestionsBlock()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    suggestions: state.suggestions,
    article: state.article
});

const mapDispatchToProps = (dispatch, props) => ({
    fetchArticle: () => dispatch(articleActions.getArticle(props.match.params['id'])),
    fetchSuggestionsByArticle: () => dispatch(suggestionActions.getSuggestionsByArticle(props.match.params['id']))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminArticle);