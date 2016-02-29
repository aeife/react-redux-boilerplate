import React from 'react';

export default class PostsList extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    postsData: React.PropTypes.object,
    actions: React.PropTypes.object
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.fetchPosts(this.refs.subredditInput.value);
  };
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='subreddit' ref='subredditInput' defaultValue='news'></input>
          <button type='submit'>submit</button>
        </form>
        {this.props.postsData.get('subreddit')
        ? <h2>Posts for subreddit {this.props.postsData.get('subreddit')}</h2>
        : null}
        <ul>
          {this.props.postsData.get('posts') ? this.props.postsData.get('posts').map(post =>
            <li key={post.getIn(['data', 'id'])}>
              <a href={post.getIn(['data', 'url'])} target='_blank'>{post.getIn(['data', 'title'])}</a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}
