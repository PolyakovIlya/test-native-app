import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { Link } from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
    renderAdmin() {
        const { user } = this.props;

        return (
            <>
                <div className="start">
                    {this.renderHomeLink()}
                    <div className="links">
                        {this.renderLinks()}
                    </div>
                </div>
                <div className="end">
                    <div className="greeting">Hello, editor: {user.username}!</div>
                    <div className="logout" onClick={this.logout}>Logout</div>
                </div>
            </>
        );
    }

    renderLinks() {
        const adminLinks = [
            {
                title: 'Articles',
                url: '/admin'
            },
            {
                title: 'Suggestions',
                url: '/admin/suggestions'
            }
        ];

        return (
            adminLinks.map((link, i) => {
                return (
                    <Link className="link" key={i} to={link.url}>{link.title}</Link>
                )
            })
        )
    }

    logout = () => {
        const {dispatch} = this.props;
        dispatch(userActions.logout());
    }

    renderHomeLink() {
        return (
            <Link to={'/'} className="logo">Home Logo</Link>
        )
    }

    renderUser() {
        const { user } = this.props;

        return (
            <>
                <div className="start">
                    {this.renderHomeLink()}
                </div>
                <div className="end">
                    <div className="greeting">Hello, {user.username}!</div>
                    <div className="logout" onClick={this.logout}>Logout</div>
                </div>
            </>
        );
    }

    render() {
        const { user } = this.props;
        let content = null;

        if(!user) {
            return null
        } else {
            content = user.isAdmin ? this.renderAdmin() : this.renderUser();
        }

        return (
            <header>
                <div className="navbar">
                    {content}
                </div>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    user: state.authentication.user
});

export default connect(mapStateToProps)(Navbar);