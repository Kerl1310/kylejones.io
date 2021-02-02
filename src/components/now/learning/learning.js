import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const Learning = () => {
    const { t } = useTranslation();
    return (
        <ActivityBase label={t("learningLabel")} content={siteConfig.now.learning}/>
    )
};

export default Learning;