import React, { Component } from 'react'
import { connect } from 'react-redux';
import { suggestionActions } from '../../actions';
import Suggestion from '../../components/Suggestion';
import './AdminSuggestions.scss'

class AdminSuggestions extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;

        dispatch(suggestionActions.getSuggestions());
    }

    onClickDelete(id) {
        const {dispatch} = this.props;
        dispatch(suggestionActions.removeSuggestion(id));
    }

    onClickStatus(id, status) {
        const {dispatch} = this.props;

        dispatch(suggestionActions.updateSuggestion(id, status));
    }

    renderStatusFilter() {
        const {dispatch, suggestionFilter} = this.props;

        const filters = [
            'all',
            'approved',
            'declined',
            'pending'
        ];

        return (
            <div className="statusFilter">
                <div className="label">Status filter: </div>
                <select
                    onChange={(e) => dispatch(suggestionActions.setSuggestionFilter(e.target.value))}
                    defaultValue={suggestionFilter || null}
                >
                    {filters.map((f, i) => {
                        return (
                            <option value={f} key={i}>{f}</option>
                        );
                    })}
                </select>
            </div>
        );
    }

    renderSuggestions() {
        const { suggestions } = this.props;
        if(!suggestions.length) return <span className="noResults">There are no results!</span>;

        return (
            suggestions.map((s, index) => (
                <Suggestion
                    key={index}
                    suggestion={s}
                    handleSuggestionDelete={this.onClickDelete.bind(this)}
                    handleSuggestionStatus={this.onClickStatus.bind(this)}
                />
            ))
        )
    }

    render() {
        return (
            <div className="container">
                {this.renderStatusFilter()}
                {this.renderSuggestions()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    suggestionFilter: state.suggestionFilter,
    suggestions: state.suggestionFilter === 'all'
        ? state.suggestions
        : state.suggestions.filter((s) => (state.suggestionFilter === s.status))
});

export default connect(mapStateToProps)(AdminSuggestions);