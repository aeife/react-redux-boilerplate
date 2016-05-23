import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default class Root extends React.Component {
  static propTypes = {
    history: React.PropTypes.object.isRequired,
    routes: React.PropTypes.element.isRequired,
    store: React.PropTypes.object.isRequired
  };
  renderDevTools = () => {
    if (__DEBUG__) {
      const DevTools = require('./DevTools').default;
      return <DevTools />;
    }
  };
  render () {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            {this.props.routes}
          </Router>

          {this.renderDevTools()}
        </div>
      </Provider>
    );
  }
}
