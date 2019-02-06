import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            const {user} = this.props;

            if (!user) {
                // return history.push('/register');
            }
        }

        componentWillUpdate(nextProps) {
            const {user} = nextProps;

            if (!user) {
                // return history.push('/login');
            }
        }

        PropTypes = {
            router: PropTypes.object,
        }

        render() {
            const {user} = this.props;

            return user ? <ComposedComponent {...this.props} /> : null;
        }
    }

    const mapStateToProps = (state) => {
        const {authentication} = state;
        const { user } = authentication;
        return { user };
    }

    return connect(mapStateToProps)(Authentication);
}