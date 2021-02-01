import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Playing = ({game}) => {
    const { t } = useTranslation();
    return (
        <li>
            <strong>{t("playingLabel")}: </strong>
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