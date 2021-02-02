import React from 'react';
import renderer from 'react-test-renderer';

import CoffeeButton from '../coffeeButton';

describe('CoffeeButton', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <CoffeeButton />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});