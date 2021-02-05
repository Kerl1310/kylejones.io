import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const LinkedInSocialButton = () => {
    return (
        <a
            className="social-link linkedin"
            href={social.linkedin}
        >
            <FaLinkedin className="social-icon" size="32" />
        </a>
    )
};

export default LinkedInSocialButton;