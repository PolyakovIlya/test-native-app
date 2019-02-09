import {createStackNavigator} from 'react-navigation';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

export default createStackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Sign Up'
        }
    }
});