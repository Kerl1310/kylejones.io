import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const GithubSocialButton = () => {
    return (
        <a
            className="social-link github"
            href={social.github}
        >
            <FaGithub className="social-icon" size="32" />
        </a>
    )
};

export default GithubSocialButton;