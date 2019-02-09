import {createStackNavigator} from 'react-navigation';
import Profile from '../screens/Profile';

export const ProfileTab = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile'
        }
    }
});