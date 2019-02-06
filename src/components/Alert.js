import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

class Alert extends Component {
    componentDidMount() {
        const { onDismissClick } = this.props;
        this.timeout = setTimeout(() => {
            onDismissClick();
        }, 4000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        const { errorType, text, onDismissClick } = this.props;

        const color = {
            'error': '#AA3939',
            'info': '#5e87ac',
            'warning': '#e6c040',
            'success': '#329c5b'
        };

        return (
            <li className="alert" style={{ backgroundColor: color[errorType] }}>
                <p className="content">
                    {text}
                </p>
                <button className="dismiss" onClick={onDismissClick}>
                    x
                </button>
            </li>
        );
    }

    shouldComponentUpdate() {
        return false;
    }
}

Alert.propTypes = {
    errorType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onDismissClick: PropTypes.func,
};

export default Alert;