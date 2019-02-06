import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
    render() {
        return (
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}

export default Loader;