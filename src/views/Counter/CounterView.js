import React from 'react';
import { connect } from 'react-redux';

import { actions as counterActions } from 'redux/counter';
import Heading from 'components/Heading/Heading';
import Counter from 'components/Counter/Counter';

class CounterView extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    increment: React.PropTypes.func.isRequired
  };
  render () {
    return (
      <div>
        <h1>Counter View</h1>

        <Heading text='My App'/>
        <Counter value={this.props.counter} increment={() => this.props.increment()}/>
      </div>
    );
  }
}

function select (state) {
  return {
    counter: state.counter
  };
};

export default connect(select, counterActions)(CounterView);
