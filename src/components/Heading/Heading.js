import React from 'react';
import css from './Heading.scss';

export default class Heading extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    text: React.PropTypes.string
  };
  render () {
    return (
      <h1 className={css.header}>
        My Heading3: {this.props.text}
      </h1>
    );
  }
}
