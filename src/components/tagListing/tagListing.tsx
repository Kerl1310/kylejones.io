import React, { FC } from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

interface TagListingProps {
    tag: {
        fieldValue: string,
        totalCount: number
    }
}

const TagListing : FC<TagListingProps> = ({ tag }) => {
    const name = tag.fieldValue;
    const url = `/tags/${kebabCase(name)}/`;
    return (
        <li id={name} className="tag">
            <Link to={url}>
                {name} ({tag.totalCount})
            </Link>
        </li>
    )
};

export default TagListing;