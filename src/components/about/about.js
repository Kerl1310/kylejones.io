import React from 'react';
import '../i18n';
import { useTranslation } from 'react-i18next';

const About = ({ text = '' }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("aboutTitle")}</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default About;