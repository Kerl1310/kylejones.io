import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';

import SEO from '../SEO';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: "Hi, I'm Kyle!",
          description: 'Personal website for Kyle Jones',
          author: 'Kyle Jones',
        },
      },
    })
  );
});

describe('SEO', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SEO
          url="https://localhost/my-article"
          title="My Title"
          keywords={['my-keyword', 'my-second-keyword']}
          description="my-description"
          featuredImage="https://localhost/my-article-image.jpg"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
