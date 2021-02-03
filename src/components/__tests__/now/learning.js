import React from 'react';
import renderer from 'react-test-renderer';

import Learning from '../../now/learning';

describe('Learning', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Learning />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
