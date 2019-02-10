import React, { Component } from 'react'
import { connect } from 'react-redux';
import { suggestionActions } from '../../actions';
import { Text } from 'react-native';

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


    render() {
        return (
            <Text className="container">
                kek
            </Text>
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