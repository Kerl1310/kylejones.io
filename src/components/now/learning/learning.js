import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';

const Learning = () => {
    return (
        <ActivityBase label='Learning' content={siteConfig.now.learning}/>
    )
};

export default Learning;