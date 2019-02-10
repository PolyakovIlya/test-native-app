import {createStackNavigator} from 'react-navigation';
import AdminSuggestions from '../../screens/admin/AdminSuggestions';
// import Article from '../screens/Article';

export const AdminSuggestionTab = createStackNavigator({
    Articles: {
        screen: AdminSuggestions,
        navigationOptions: {
            title: 'Suggestions'
        }
    },
    // Article: {
    //     screen: Article,
    //     navigationOptions: {
    //         title: 'Article'
    //     }
    // },
});