import React, { FC } from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { Artist } from './artist';

interface ListeningProps {
    artist: Artist
}

const Listening: FC<ListeningProps> = ({artist}) => {
    const { t } = useTranslation();
    return (
        <li key={artist.name}>
            <strong>{t("listeningLabel")}: </strong>
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