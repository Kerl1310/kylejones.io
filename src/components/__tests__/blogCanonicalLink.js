import React from 'react';
import renderer from 'react-test-renderer';

import BlogCanonicalLink from '../blogCanonicalLink';

const testUrl = "https://example.com/"

describe('Blog Canonical Link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogCanonicalLink canonicalUrl={testUrl}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
