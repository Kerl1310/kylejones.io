import React from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';
import PublicSpeaking from '../publicSpeaking';
import { futureSpeaking } from '../../../data/siteConfig';

const FuturePublicSpeaking = () => {
    const { t } = useTranslation();
    const futureSpeakingMap = futureSpeaking;

    return (
        <PublicSpeaking title={t("futurePublicSpeakingTitle")} speakingMap={futureSpeakingMap}/>
    );
}

export default FuturePublicSpeaking;
