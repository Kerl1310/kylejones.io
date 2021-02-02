import React from 'react';
import styled from 'styled-components';
import SkillBar from './skill-bar';
import '../i18n';
import { useTranslation } from 'react-i18next';

const Skills = ({ className, skills = [] }) => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <h1>{t("skillsTitle")}</h1>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
)};

export default styled(Skills)`
  width: 100%;
`;
