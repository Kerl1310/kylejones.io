import React from 'react';
import renderer from 'react-test-renderer';

import Working from '../now/working';

describe('Working', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Working />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
