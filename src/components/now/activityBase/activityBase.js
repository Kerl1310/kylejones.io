import React from 'react';

const ActivityBase = ({label, content}) => {
    return (
        <li>
            <strong>{label}: </strong>{content}
        </li>
    )
};

export default ActivityBase;