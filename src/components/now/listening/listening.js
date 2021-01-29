import React from 'react';

const Listening = ({artist}) => {
    return (
        <li>
            <strong>Listening to: </strong>
            <a
                className={'artist-link'}
                href={artist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
            >
                {artist.name}
            </a>
        </li>
    )
};

export default Listening;