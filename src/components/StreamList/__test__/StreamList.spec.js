import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { List, Map } from 'immutable';

import StreamList from '../StreamList.js';

describe('StreamList', () => {
  it('renders input field', () => {
    const streamData = Map({streams: List.of(Map({id: 1}), Map({id: 3}))});
    const component = TestUtils.renderIntoDocument(
      <StreamList streamData={streamData}/>
    );
    const input = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');

    expect(input.length).to.equal(1);
  });

  it('renders list points for each stream', () => {
    const streamData = Map({streams: List.of(Map({id: 1}), Map({id: 3}))});
    const component = TestUtils.renderIntoDocument(
      <StreamList streamData={streamData}/>
    );
    const stream = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');

    expect(stream.length).to.equal(2);
  });
});
