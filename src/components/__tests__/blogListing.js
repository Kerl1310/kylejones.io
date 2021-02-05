import React from 'react';
import renderer from 'react-test-renderer';

import BlogListing from '../blogListing';

const testArticle = {
    node: {
        frontmatter: {
            date: "2021-02-04",
            path: "test-path",
            title: "Testing"
        },
        excerpt: "Testing excerpt"
    }
};

describe('Blog Listing', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<BlogListing article={testArticle} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
