import React from 'react'
import { FaStackOverflow } from 'react-icons/fa';
import { social } from '../../../../data/siteConfig';

const StackOverflowSocialButton = () => {
    return (
            <a
                className="social-link stackOverflow"
                href={social.stackOverflow}
            >
                <FaStackOverflow className="social-icon" size="32" />
            </a>
    )
};

export default StackOverflowSocialButton;