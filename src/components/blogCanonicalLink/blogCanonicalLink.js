import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Separator = styled.hr`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const BlogCanonicalLink = ({canonical}) => {
        if (canonical) {
            return (
            <div>
                <p>Originally published{' '}
                    <Link
                        to={canonical}
                        target="__blank"
                        rel="noopener noreferrer">
                        here.
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