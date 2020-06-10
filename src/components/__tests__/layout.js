import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout location="my-location" children="<div></div>" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
