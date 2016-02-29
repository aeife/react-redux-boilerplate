import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { List, Map } from 'immutable';

import PostsList from '../PostsList.js';

describe('PostsList', () => {
  it('renders input field', () => {
    const postsData = Map({posts: List.of(Map({id: 1}), Map({id: 3}))});
    const component = TestUtils.renderIntoDocument(
      <PostsList postsData={postsData}/>
    );
    const input = TestUtils.scryRenderedDOMComponentsWithTag(component, 'input');

    expect(input.length).to.equal(1);
  });

  it('renders list points for each post', () => {
    const postsData = Map({posts: List.of(Map({id: 1}), Map({id: 3}))});
    const component = TestUtils.renderIntoDocument(
      <PostsList postsData={postsData}/>
    );
    const post = TestUtils.scryRenderedDOMComponentsWithTag(component, 'li');

    expect(post.length).to.equal(2);
  });
});
