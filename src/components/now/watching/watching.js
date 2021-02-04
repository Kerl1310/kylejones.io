import React from 'react';
import { now } from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Watching = () => {

    const { t } = useTranslation();

    return (
        <ActivityBase label={t('watchingLabel')} content={now.watching}/>
    )
};

export default Watching;