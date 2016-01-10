import React from 'react';

export default class Counter extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    value: React.PropTypes.number,
    increment: React.PropTypes.func
  };
  render () {
    return (
      <div>
      <h1>
        Counter: {this.props.value}
      </h1>
      <button onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}
