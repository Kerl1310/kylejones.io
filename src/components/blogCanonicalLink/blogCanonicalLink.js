import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Separator = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const BlogCanonicalLink = ({canonicalUrl, canonicalText = null}) => {
        if (canonicalUrl) {
            return (
            <div>
                <p>Originally published at{' '}
                    <Link
                        to={canonicalUrl}
                        target="__blank"
                        rel="noopener noreferrer">
                        {!!(canonicalText) ? canonicalText : canonicalUrl}
                    </Link>
                </p>
                <Separator />
            </div>
        );
    }
    else {
        return null;
    }
};

export default BlogCanonicalLink