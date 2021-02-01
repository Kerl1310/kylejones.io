import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../layout';

describe('Layout', () => {
  it('renders correctly', () => {

    const testPageContext = {"locale":"en"};

    const tree = renderer
      .create(<Layout location="my-location" pageContext={testPageContext} children="<div></div>" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
