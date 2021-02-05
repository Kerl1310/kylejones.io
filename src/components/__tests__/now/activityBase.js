import React from 'react';
import renderer from 'react-test-renderer';

import ActivityBase from '../../now/activityBase';

describe('ActivityBase', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ActivityBase label="my-label" content="my-content" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
