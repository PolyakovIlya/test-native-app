import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Articles from './Articles';
import Login from './auth/Login';
import Register from './auth/Register';
import Article from './Article';

import AdminArticles from './admin/AdminArticles';
import AdminArticle from './admin/AdminArticle';
import AdminSuggestions from './admin/AdminSuggestions';

import requireAuth from '../guards/requireAuth'
import permission from "../guards/permission";

import './App.scss';
import Navbar from './Navbar';
import Alerts from './Alerts';

const App = () => (
    <Router>
        <div className="body">
            <Navbar/>
            <Alerts/>

            <Route exact path="/" component={requireAuth(Articles)} />
            <Route path="/article/:id" component={requireAuth(Article)} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route exact path="/admin" component={permission(requireAuth(AdminArticles))}/>
            <Route path="/admin/article/:id" component={permission(requireAuth(AdminArticle))} />
            <Route path="/admin/suggestions" component={permission(requireAuth(AdminSuggestions))} />
        </div>
    </Router>
)

export default connect()(App)


