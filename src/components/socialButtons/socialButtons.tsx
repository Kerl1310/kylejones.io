import React from 'react'
import DevSocialButton from './devSocialButton';
import EmailSocialButton from './emailSocialButton';
import GithubSocialButton from './githubSocialButton'
import LinkedInSocialButton from './linkedinSocialButton';
import MediumSocialButton from './mediumSocialButton';
import StackOverflowSocialButton from './stackOverflowSocialButton';

const SocialButtons = () => {
    return (
        <div className="social">
            <GithubSocialButton/>
            <LinkedInSocialButton/>
            <DevSocialButton/>
            <MediumSocialButton/>
            <StackOverflowSocialButton/>
            <EmailSocialButton/>
        </div>
    )
};

export default SocialButtons;