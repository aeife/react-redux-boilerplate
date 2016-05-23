import React from 'react';

export default class Counter extends React.Component {
  static propTypes = {
    counter: React.PropTypes.object,
    increment: React.PropTypes.func
  };
  render () {
    return (
      <div>
        <h1>
          Counter ({this.props.counter.get('id')}): {this.props.counter.get('value')}
        </h1>
        <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}
