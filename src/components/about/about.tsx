import React, { FC } from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  text: string
}

const About : FC<AboutProps> = ({ text = '' }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("aboutTitle")}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default About;