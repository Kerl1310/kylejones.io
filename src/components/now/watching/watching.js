import React from 'react';
import siteConfig from '../../../../data/siteConfig';
import ActivityBase from '../activityBase';

const Watching = () => {
    return (
        <ActivityBase label='Watching' content={siteConfig.now.watching}/>
    )
};

export default Watching;