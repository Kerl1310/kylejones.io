import React from 'react'
import { FaDev } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const DevSocialButton = () => {
    return (
        <a className="social-link dev" href={social.dev}>
            <FaDev className="social-icon" size="32" />
        </a>
    )
};

export default DevSocialButton;