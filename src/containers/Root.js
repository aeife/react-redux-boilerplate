import React from 'react';
import { Router, browserHistory } from 'react-router';

import DevTools from './DevTools';
import routes from 'routes/index';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  renderDevTools = () => {
    if (__DEBUG__) {
      return <DevTools />;
    }
  };
  render () {
    return (
      <div>
        <Router history={browserHistory}>
          {routes}
        </Router>

        {this.renderDevTools()}
      </div>
    );
  }
}
