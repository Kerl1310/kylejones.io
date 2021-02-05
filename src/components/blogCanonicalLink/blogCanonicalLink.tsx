import React, { FC } from 'react';
import { Link } from 'gatsby';
import Separator from '../separator';

interface BlogCanonicalLinkProps {
    canonicalUrl: string
    canonicalText?: string
}

const BlogCanonicalLink : FC<BlogCanonicalLinkProps> = ({canonicalUrl, canonicalText = null}) => {
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

export default BlogCanonicalLink;