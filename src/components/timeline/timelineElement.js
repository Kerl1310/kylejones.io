import React from 'react'

const TimelineElement = ({job}) => {
    const startMonth = job.begin.month;
    const startYear = job.begin.year;
    const key = `${job.company}-${startMonth}-${startYear}`;

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