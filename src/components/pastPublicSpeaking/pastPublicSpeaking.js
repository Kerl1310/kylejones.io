import React from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';
import PublicSpeaking from '../publicSpeaking';
import { pastSpeaking } from '../../../data/siteConfig';

const PastPublicSpeaking = () => {
    const { t } = useTranslation();
    const pastSpeakingMap = pastSpeaking;

    return (
        <PublicSpeaking title={t("pastPublicSpeakingTitle")} speakingMap={pastSpeakingMap}/>
    );
}

export default PastPublicSpeaking;
