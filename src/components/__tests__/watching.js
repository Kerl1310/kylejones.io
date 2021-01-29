import React from 'react';
import renderer from 'react-test-renderer';

import Watching from '../now/watching';

describe('Watching', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Watching />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
