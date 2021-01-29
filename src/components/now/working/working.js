import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';

const Working = () => {
    return (
        <ActivityBase label='Working on' content={siteConfig.now.working_on}/>
    )
};

export default Working;