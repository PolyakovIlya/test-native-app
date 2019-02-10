import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import UserTabNavigator from './UserTabNavigator';
import AdminTabNavigator from './AdminTabNavigator';
import AuthNavigator from './AuthNavigator';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
//
//
// }));

export const createRootNavigator = (signedIn, isAdmin) => {
    console.log('signedId', signedIn ? "SignedIn" : "SignedOut")
    console.log('isAdmin', isAdmin)
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: !isAdmin ? UserTabNavigator : AdminTabNavigator
            },
            SignedOut: {
                screen: AuthNavigator
            }
        },
        {
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
        }
    )
}