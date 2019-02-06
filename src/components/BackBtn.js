import React, {Component} from 'react';
import './BackBtn.scss';

class BackBtn extends Component {
    render() {
        return (
            <div className="backBtn" onClick={() => console.log('back')}>{'Back'}</div>
        )
    }
}

export default BackBtn;

