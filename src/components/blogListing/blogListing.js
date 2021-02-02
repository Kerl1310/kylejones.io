import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const Separator = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

const BlogListing = ({articleLink}) => {
    return (
        <li
            id={`blog-post-${articleLink.node.frontmatter.date}`}
            key={`blog-post-${articleLink.node.frontmatter.date}`}
            className="blog-post"
            >
            <div className="blog-post-date">
                <h4>
                {new Date(
                    articleLink.node.frontmatter.date
                ).toLocaleDateString('en-GB')}
                </h4>
            </div>
            <Link
                to={articleLink.node.frontmatter.path}
                target="__blank"
                rel="noopener noreferrer"
            >
                {articleLink.node.frontmatter.title}
            </Link>
            <p>{articleLink.node.excerpt}</p>
            <Separator />
            </li>
    )
};

export default BlogListing;