import React from 'react';

import Counter from 'components/Counter/Counter';

export default class CounterList extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    counters: React.PropTypes.object,
    actions: React.PropTypes.object
  };
  render () {
    return (
      <div>
        <button onClick={() => this.props.actions.addCounter()}>add counter</button>
        {this.props.counters.map(counter =>
          <Counter key={counter.get('id')} counter={counter} increment={() => this.props.actions.increment(counter.get('id'))} />
        )}
      </div>
    );
  }
}
