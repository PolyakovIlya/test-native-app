import React, { Component } from 'react';
import { createRootNavigator } from './navigation/AppNavigator';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            signedIn: false
        }
    }

    render() {
        const { user } = this.props;
        let signedIn = false;

        if(user && user.token) signedIn = true;

        const Layout = createAppContainer(createRootNavigator(signedIn, user && user.isAdmin));
        return <Layout />;
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user
});

export default connect(mapStateToProps)(App);

