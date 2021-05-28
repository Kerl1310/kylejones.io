import React from 'react';
import styled from 'styled-components';
import '../i18n';

const PublicSpeakingLinkGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const PublicSpeakingLink = styled.div`
  display: block;
  width: 100%;
  :not(:last-of-type) {
    margin-bottom: 16px;
  }
  :last-of-type {
    margin-bottom: 32px;
  }
`;

const PublicSpeaking = ({ title, speakingMap }) => {
  return (
    <div className="public-speaking-container">
      <h2 className="public-speaking-title">{title}</h2>
      <PublicSpeakingLinkGroup className="public-speaking-link-group-container">
        {' '}
        {speakingMap.map((speaking, i) => {
            return (
          <React.Fragment key={speaking.title}>
            <PublicSpeakingLink
              className="public-speaking-link-container"
              id={`public-speaking-link-container-${speaking.eventName}`}
            >
                <strong>{speaking.date}: </strong>
              <a
                className="public-speaking-link"
                id={`public-speaking-link-${speaking.eventName}`}
                href={speaking.url}
                target="__blank"
                rel="noopener noreferrer"
              >
                <strong>{speaking.talkTitle} - {speaking.eventName}</strong>
              </a>
            </PublicSpeakingLink>
          </React.Fragment>
)})}
      </PublicSpeakingLinkGroup>
    </div>
  );
}

export default styled(PublicSpeaking)`
  position: relative;
  a {
    display: list-item; /* This has to be "list-item"                                               */
    list-style-type: none; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
  }
`;