import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
//
//
// }));

export const createRootNavigator = (signedIn) => {
    console.log('signedId', signedIn ? "SignedIn" : "SignedOut")
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: MainTabNavigator
            },
            SignedOut: {
                screen: AuthNavigator
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    )
}