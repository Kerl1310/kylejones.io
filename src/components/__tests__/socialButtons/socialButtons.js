import React from 'react';
import renderer from 'react-test-renderer';

import SocialButtons from '../../socialButtons';

describe('Social Buttons', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SocialButtons />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
