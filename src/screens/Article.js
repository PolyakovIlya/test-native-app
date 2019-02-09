import React, {Component} from 'react'
import { connect } from 'react-redux';
import { articleActions, suggestionActions } from '../actions/index';

class Article extends Component {
    constructor(props) {
        super(props);

        const {dispatch} = props;
        dispatch(articleActions.getArticle(props.match.params['id']));
    }

    createSuggestion = (suggestion) => {
        const {dispatch} = this.props;
        dispatch(suggestionActions.createSuggestion(suggestion));
    }

    renderList() {
        const {article} = this.props;
        if(!article && !article.paragraphs) return null;

        const paragraphs = article.paragraphs || [];

        return (
            paragraphs.map((p, i) => {

            })
        )
    }

    renderTitle() {
        const {article} = this.props;

        if(!article) return null;

        return (<h2 className="articleHeader">{article.title}</h2>);
    }

    render() {
        return (
            <>
                <div className="container">
                    {this.renderTitle()}
                    <div className="paragraphBlock">
                        <h3 className="subHeader">Paragraphs:</h3>
                        {this.renderList()}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    article: state.article
});

export default connect(mapStateToProps)(Article);