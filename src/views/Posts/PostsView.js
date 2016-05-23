import React from 'react';
import { connect } from 'react-redux';

import { actions as postsListActions } from 'redux/actions/postsList';
import PostsList from 'components/PostsList/PostsList';

class PostsView extends React.Component {
  static propTypes = {
    postsData: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
  };
  render () {
    return (
      <div>
        <h1>Posts View</h1>
        <PostsList postsData={this.props.postsData} actions={this.props.actions} />
      </div>
    );
  }
}

function select (state) {
  return {
    postsData: state.postsData
  };
}

function mergeProps (stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    postsData: stateProps.postsData,
    actions: dispatchProps
  });
}

export default connect(select, postsListActions, mergeProps)(PostsView);
