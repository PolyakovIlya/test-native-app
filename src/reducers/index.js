import { combineReducers } from 'redux'
import authentication from './authentication'
import { articles, article } from './article'
import { suggestions, suggestionFilter } from './suggestion'
import alerts from './alerts'

export default combineReducers({
    authentication,
    articles,
    article,
    suggestions,
    suggestionFilter,
    alerts,
})