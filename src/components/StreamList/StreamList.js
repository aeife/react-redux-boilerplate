import React from 'react';

export default class StreamList extends React.Component {
  constructor (props) {
    super(props);
  }
  static propTypes = {
    streamData: React.PropTypes.object,
    actions: React.PropTypes.object
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.actions.fetchStreams(this.refs.gameInput.value);
  };
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='game' ref='gameInput' defaultValue='League of Legends'></input>
          <button type='submit'>submit</button>
        </form>
        {this.props.streamData.get('game')
        ? <h2>There are {this.props.streamData.getIn(['meta', 'total'])} Streams for {this.props.streamData.get('game')}</h2>
        : null}
        <ul>
          {this.props.streamData.get('streams') ? this.props.streamData.get('streams').map(stream =>
            <li key={stream.get('_id')}>
              <img src={stream.getIn(['preview', 'small'])} />
              <a href={stream.getIn(['channel', 'url'])} target='_blank'>{stream.getIn(['channel', 'display_name'])}</a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}
