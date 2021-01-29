import React from 'react';

const Playing = ({game}) => {
    return (
        <li>
            <strong>Playing: </strong>
            <a
                className={'game-link'}
                href={`https://store.steampowered.com/app/${game.steamId}`}
                target='_blank'
                rel='noopener noreferrer'
            >
                {game.name}
            </a>
        </li>
    )
};

export default Playing;