export const REQUEST_STREAMS = 'REQUEST_STREAMS';
export const RECEIVE_STREAMS = 'RECEIVE_STREAMS';

export const requestStreams = (game) => ({
  type: REQUEST_STREAMS,
  payload: {
    game
  }
});

export const receiveStreams = (game, response) => ({
  type: RECEIVE_STREAMS,
  payload: {
    game,
    streams: response.streams,
    meta: {
      total: response._total
    }
  }
});

export const fetchStreams = (game) => {
  return dispatch => {
    dispatch(requestStreams(game));
    return fetch(`https://api.twitch.tv/kraken/streams?game=${game}`)
      .then(res => res.json())
      .then(res => dispatch(receiveStreams(game, res)));
  };
};

export const actions = {
  requestStreams,
  receiveStreams,
  fetchStreams
};
