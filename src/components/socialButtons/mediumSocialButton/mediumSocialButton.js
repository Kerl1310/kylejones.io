import React from 'react'
import { FaMedium } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const MediumSocialButton = () => {
    return (
        <a
            className="social-link medium"
            href={social.medium}
        >
            <FaMedium className="social-icon" size="32" />
        </a>
    )
};

export default MediumSocialButton;