import React from 'react';
import { connect } from 'react-redux';

import { increment } from 'redux/counter';
import Heading from 'components/Heading/Heading';
import Counter from 'components/Counter/Counter';
import DevTools from './DevTools';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    store: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    counter: React.PropTypes.number.isRequired
  };
  renderDevTools = () => {
    if (__DEBUG__) {
      return <DevTools />;
    }
  };
  render () {
    const { dispatch, counter } = this.props;
    return (
      <div>
        <h1>App</h1>
        <Heading text='My App'/>
        <Counter value={counter} increment={() => dispatch(increment())}/>

        {this.renderDevTools()}
      </div>
    );
  }
}

function select (state) {
  return {
    counter: state.counter
  };
};

export default connect(select)(Root);
