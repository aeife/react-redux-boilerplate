import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';

import Heading from '../Heading.js';

describe('Heading', () => {
  it('renders headline with text', () => {
    const text = 'my text';
    const component = TestUtils.renderIntoDocument(
      <Heading text={text}/>
    );
    const headings = TestUtils.scryRenderedDOMComponentsWithTag(component, 'h1');

    expect(headings.length).to.equal(1);
  });
});
