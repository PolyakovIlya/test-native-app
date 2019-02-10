import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
import Profile from '../screens/Profile';
import { AdminArticlesTab } from './admin/HomeTabNavigator';
import { AdminSuggestionTab } from './admin/SuggestionTabNavigator';
import { ProfileTab } from './ProfileTabNavigator';

export default createBottomTabNavigator({
    Home: {
        screen: AdminArticlesTab,
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
    Suggestion: {
        screen: AdminSuggestionTab,
        navigationOptions: {
            tabBarLabel: 'Suggestions',
            tabBarIcon: ({ focused }) => (
                <TabBarIcon
                    focused={focused}
                    name={
                        Platform.OS === 'ios'
                            ? `ios-paper`
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