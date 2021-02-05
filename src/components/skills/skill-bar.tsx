import React, { FC } from 'react';
import styled from 'styled-components';

interface SkillBarProps {
  className: string,
  name: string,
  level: Number
}

const SkillBar : FC<SkillBarProps> = ({ className, name, level }) => {
  return (
    <div className={className}>
      <label htmlFor={`${name}-bar`}>{name}</label>
      <div id={`${name}-bar`} className="skill__bar">
        <div className="skill__level"></div>
      </div>
    </div>
  );
};

SkillBar.displayName = 'SkillBar';

export default styled(SkillBar)`
  width: 100%;
  .skill__bar {
    width: 100%;
    height: 10px;
    background-color: lightgrey;
    padding: 1px;
  }
  .skill__level {
    background-color: #25303b;
    width: ${p => p.level || 0}%;
    height: 8px;
  }
`;