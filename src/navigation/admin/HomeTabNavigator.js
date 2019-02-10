import {createStackNavigator} from 'react-navigation';
import Articles from '../../screens/Articles';
// import Article from '../screens/Article';

export const AdminArticlesTab = createStackNavigator({
    Articles: {
        screen: Articles,
        navigationOptions: {
            title: 'Articles'
        }
    },
    // Article: {
    //     screen: Article,
    //     navigationOptions: {
    //         title: 'Article'
    //     }
    // },
});