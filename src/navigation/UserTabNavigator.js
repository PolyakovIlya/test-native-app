import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
import Profile from '../screens/Profile';
import { ArticlesTab } from './HomeTabNavigator';
import { ProfileTab } from './ProfileTabNavigator';

export default createBottomTabNavigator({
    Home: {
        screen: ArticlesTab,
        navigationOptions: {
            tabBarLabel: 'Articles',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-list`
                            : 'md-information-circle'
                    }
                />
            ),
        }
    },
    Profile: {
        screen: ProfileTab,
        navigationOptions: {
            title: 'Profile',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={Platform.OS === 'ios' ? 'ios-contact' : 'md-сontact'}
                />
            )
        }
    }
})