import React, { FC } from 'react';

interface ActivityBaseProps {
    label?: string
    content?: string
  }

const ActivityBase: FC<ActivityBaseProps> = ({label, content}) => {
    return (
        <li key={label}>
            <strong>{label}: </strong>{content}
        </li>
    )
};

export default ActivityBase;