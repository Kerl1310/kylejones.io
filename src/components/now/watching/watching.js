import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Watching = () => {

    const { t } = useTranslation();

    return (
        <ActivityBase label={t('watchingLabel')} content={siteConfig.now.watching}/>
    )
};

export default Watching;