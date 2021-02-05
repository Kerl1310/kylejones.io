import React, { FC } from 'react';

interface RepositoryElementProps {
    repo: {
        name: string,
        description: string,
        updated_at: string,
        html_url: string,
        stargazers_count: number
    }
};

const RepositoryElement : FC<RepositoryElementProps> = ({ repo }) => {
    return (
        <React.Fragment key={repo.name}>
            <div className="repositories__repo">
                <a className="repositories__repo-link" href={repo.html_url}>
                    <strong>{repo.name}</strong>
                </a>
                <div>{repo.description}</div>
                <div className="repositories__repo-date">
                    Updated: {new Date(repo.updated_at).toUTCString()}
                </div>
                <div className="repositories__repo-star">
                    ★ {repo.stargazers_count}
                </div>
            </div>
            <hr />
        </React.Fragment>
    )
};

export default RepositoryElement;