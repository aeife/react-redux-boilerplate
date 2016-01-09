import React from 'react';
import Heading from 'components/Heading/Heading';

export default class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h1>App</h1>
        <Heading text='My App'/>
      </div>
    );
  }
}
