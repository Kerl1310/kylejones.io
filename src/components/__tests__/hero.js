import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../hero';

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Hero heroImg="/my-image.jpeg" title="my-title" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
