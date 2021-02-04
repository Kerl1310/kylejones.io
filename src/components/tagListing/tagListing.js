import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';

const TagListing = ({ tag }) => {
    const name = tag.fieldValue;
    const url = `/tags/${kebabCase(name)}/`;
    return (
        <li id={name} className="tag" key={name}>
            <Link to={url}>
                {name} ({tag.totalCount})
            </Link>
        </li>
    )
};

export default TagListing;