import React, {Component} from 'react';
import { connect } from 'react-redux';
import Alert from '../components/Alert';
import { alertActions } from '../actions';

class Alerts extends Component {
    render() {
        const { alerts, dispatch } = this.props;

        return (
            <ul className="alerts">
                {alerts.map(alert => {
                    const {id} = alert;
                    return (
                        <Alert {...alert} key={id} onDismissClick={() => dispatch(alertActions.removeAlert(id))}/>
                    );
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);