import React from 'react';
import { connect } from 'react-redux';

import { actions as counterActions } from 'redux/actions/counter';
import Heading from 'components/Heading/Heading';
import Counter from 'components/Counter/Counter';

class CounterView extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired
  };
  render () {
    return (
      <div>
        <h1>Counter View</h1>

        <Heading text='My App'/>
        <Counter value={this.props.value} increment={() => this.props.increment()}/>
      </div>
    );
  }
}

function select (state) {
  return {
    value: state.counter.get('value')
  };
};

export default connect(select, counterActions)(CounterView);
