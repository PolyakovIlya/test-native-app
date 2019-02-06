import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';

import { Icon } from 'react-native-vector-icons';

import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';

import Home from './screens/Home';
import Profile from './screens/Profile';
import TabBarIcon from './components/TabBarIcon';

export const SignedOut = createStackNavigator({
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

export const SignedIn = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-information-circle${focused ? '' : '-outline'}`
                            : 'md-information-circle'
                    }
                />
            ),
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
                />
            )
        }
    }
});

export const createRootNavigator = (signedIn) => {
    console.log('signedId', signedIn ? "SignedIn" : "SignedOut")
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    )
};