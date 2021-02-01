import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Working = () => {
    const { t } = useTranslation();
    return (
        <ActivityBase label={t('workingLabel')} content={siteConfig.now.working_on}/>
    )
};

export default Working;