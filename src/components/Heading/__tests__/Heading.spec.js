import React from 'react';
import TestUtils from 'react-addons-test-utils';
import assert from 'assert';

import Heading from '../Heading.js';

describe('Heading', () => {
  it('renders headline with text', () => {
    const text = 'my text';
    const component = TestUtils.renderIntoDocument(
      <Heading text={text}/>
    );
    const headings = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1');

    assert.deepEqual(headings.length, 1);
  });
});
