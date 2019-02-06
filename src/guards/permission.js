import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
    class Permission extends Component {
        renderPermissionError() {
            return(
                <h1>You don't have a permission to visit this page!</h1>
            );
        }

        render() {
            const {user} = this.props;

            return user && user.isAdmin ? <ComposedComponent {...this.props} /> : this.renderPermissionError();
        }
    }

    const mapStateToProps = (state) => {
        const {authentication} = state;
        const { user } = authentication;
        return { user };
    }

    return connect(mapStateToProps)(Permission);
}