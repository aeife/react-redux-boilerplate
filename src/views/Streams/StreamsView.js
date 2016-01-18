import React from 'react';
import { connect } from 'react-redux';

import { actions as streamListActions } from 'redux/actions/streamList';
import StreamList from 'components/StreamList/StreamList';

class StreamsView extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    streamData: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };
  render () {
    return (
      <div>
        <h1>Streams View</h1>
        <StreamList streamData={this.props.streamData} actions={this.props.actions} />
      </div>
    );
  }
}

function select (state) {
  return {
    streamData: state.streamData
  };
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    streamData: stateProps.streamData,
    actions: dispatchProps
  });
}

export default connect(select, streamListActions, mergeProps)(StreamsView);
