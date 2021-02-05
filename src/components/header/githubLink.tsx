import React, { FC } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { githubUsername } from '../../../data/siteConfig';

interface GithubLinkProps {
  className: string
}

const GithubLink : FC<GithubLinkProps> = styled(({ className }) => (
    <a
      className={className}
      href={`https://github.com/${githubUsername}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub size={32} />
    </a>
  ))`
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
    border: 0;
    margin: 0;
    margin-right: 0.5rem;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 42px;
    z-index: 10;
  `;

export default GithubLink;