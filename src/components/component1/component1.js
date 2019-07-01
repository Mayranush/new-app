import React from 'react';
import { connect } from 'react-redux';

import { component1Actions } from './model';

class Component1 extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.action1('new text')}>Component1</button>
                <div>{ this.props.text }</div>
            </div>
        );
    }
}

export { Component1 }
export default connect(
    state => ({ ...state.component1Reducer }),
    { ...component1Actions }
)(Component1);
