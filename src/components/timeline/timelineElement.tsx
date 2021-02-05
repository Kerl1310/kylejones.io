import React, { FC } from 'react'

interface TimelineElementProps {
    job: {
        begin: {
            month: Number,
            year: Number
        },
        duration: Number,
        occupation: string,
        company: string,
        url: string,
        description: string
    }
}

const TimelineElement : FC<TimelineElementProps> = ({job}) => {
    const startMonth = job.begin.month;
    const startYear = job.begin.year;
    const key = `${job.company}-${startMonth.toString()}-${startYear.toString()}`;

    return (
        <article
            key={`${key}`}
            className="timeline__item"
        >
            <div className="inner">
                <span className="timeline__date">
                    <span className="timeline__month">{startMonth}</span>
                    <span className="timeline__year">{startYear}</span>
                </span>
                <h2 className="timeline__title">
                    {job.occupation} at <a href={job.url}>{job.company}</a>
                    <br />
                    <small className="timeline__title--small">
                        ({job.duration || 'present'})
                </small>
                </h2>
                <p>{job.description}</p>
            </div>
        </article>
    )
};

export default TimelineElement;