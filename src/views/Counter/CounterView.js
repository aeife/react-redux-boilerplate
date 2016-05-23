import React from 'react';
import { connect } from 'react-redux';

import { actions as counterActions } from 'redux/actions/counter';
import { actions as counterListActions } from 'redux/actions/counterList';
import Heading from 'components/Heading/Heading';
import CounterList from 'components/CounterList/CounterList';

class CounterView extends React.Component {
  static propTypes = {
    counters: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object
  };
  render () {
    return (
      <div>
        <h1>Counter View</h1>

        <Heading text='My App' />
        <h2>sub</h2>
        <CounterList counters={this.props.counters} actions={this.props.actions} />
      </div>
    );
  }
}

function select (state) {
  return {
    counters: state.counters
  };
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    counters: stateProps.counters,
    actions: dispatchProps
  });
}

export default connect(select, {...counterActions, ...counterListActions}, mergeProps)(CounterView);
