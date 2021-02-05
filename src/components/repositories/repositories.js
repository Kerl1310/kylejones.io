import React, { Component } from 'react';
import jsonFetch from 'simple-json-fetch';
import styled from 'styled-components';
import { githubUsername } from '../../../data/siteConfig';
import Loader from '../loader';
import '../i18n';
import { withTranslation } from 'react-i18next';
import RepositoryElement from './repositoryElement';

const endpoint = `https://api.github.com/users/${githubUsername}/repos?type=owner&sort=updated&per_page=5&page=1`;

class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      status: 'loading',
    };
  };
  
  async componentDidMount() {
    const repos = await jsonFetch(endpoint);
    if (repos.json && repos.json.length) {
      this.setState({ repos: repos.json, status: 'ready' });
    }
  };

  render() {
    const { status } = this.state;
    const { t } = this.props;

    return (
      <div className={this.props.className}>
        <h2>{t("repositoriesTitle")}</h2>
        {status === 'loading' && (
          <div className="repositories__loader">
            <Loader />
          </div>
        )}
        {status === 'ready' && this.state.repos && (
          <React.Fragment>
            <div className="repositories__content">
              {this.state.repos.map(repo => (
                <RepositoryElement repo={repo} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const repoComponent = withTranslation()(Repositories);

export default styled(repoComponent)`
  position: relative;
  .repositories__content {
    margin-bottom: 40px;
  }

  .repositories__repo {
    position: relative;
  }

  .repositories__repo-link {
    text-decoration: none;
    color: #25303b;
  }

  .repositories__repo-date {
    color: #bbb;
    font-size: 10px;
  }

  .repositories__repo-star {
    position: absolute;
    top: 0;
    right: 0;
  }

  .repositories__loader {
    display: flex;
  }

  hr {
    margin-top: 16px;
  }
`;
