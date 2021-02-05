import React, { FC } from 'react';
import Link from 'gatsby-link';
import Separator from '../separator';

// const Separator = styled.hr`
//   margin-top: 16px;
//   margin-bottom: 16px;
//   width: 100%;
// `;

interface BlogListingProps {
    article: {
        node: {
            frontmatter: {
                date: string,
                path: string,
                title: string
            },
            excerpt: string
        }
    }
}

const BlogListing : FC<BlogListingProps> = ({article}) => {
    return (
        <li
            id={`blog-post-${article.node.frontmatter.date}`}
            key={`blog-post-${article.node.frontmatter.date}`}
            className="blog-post"
            >
            <div className="blog-post-date">
                <h4>
                {new Date(
                    article.node.frontmatter.date
                ).toLocaleDateString('en-GB')}
                </h4>
            </div>
            <Link
                to={article.node.frontmatter.path}
                target="__blank"
                rel="noopener noreferrer"
            >
                {article.node.frontmatter.title}
            </Link>
            <p>{article.node.excerpt}</p>
            <Separator />
            </li>
    )
};

export default BlogListing;