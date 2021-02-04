import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const EmailSocialButton = () => {
    return (
        <a
            className="social-link email"
            href={`mailto:${social.email}`}
        >
            <FaEnvelope className="social-icon" size="32" />
        </a>
    )
};

export default EmailSocialButton;