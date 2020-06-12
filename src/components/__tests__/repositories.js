import React from 'react';
import renderer from 'react-test-renderer';

import Repositories from '../repositories';

describe('Repositories', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Repositories />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
