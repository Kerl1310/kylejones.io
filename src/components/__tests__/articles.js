import React from 'react';
import renderer from 'react-test-renderer';
import { StaticQuery } from 'gatsby';

import Articles from '../articles';

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                path: './my-path',
                date: '01-01-2001',
                title: 'my-title',
                isFeatured: true,
                featuredImage: './my-image.png',
              },
            },
          },
          {
            node: {
              frontmatter: {
                path: './my-second-path',
                date: '02-02-2002',
                title: 'my-second-title',
                isFeatured: false,
                featuredImage: './my-second-image.jpg',
              },
            },
          },
        ],
      },
    })
  );
});

describe('Articles', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Articles />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
