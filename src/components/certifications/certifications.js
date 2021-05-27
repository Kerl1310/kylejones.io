import React from 'react';
import styled from 'styled-components';
import '../i18n';

const CertificationLinkGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CertificationLink = styled.div`
  display: block;
  width: 100%;
  :not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

const Certifications = ({ title }) => {
  return (
    <div className="certifications-container">
      <h2 className="certifications-title">{title}</h2>
      <CertificationLinkGroup className="certifications-link-group-container">
        {' '}
          <React.Fragment key={certification.node.frontmatter.path}>
            <CertificationLink
              className="certifications-link-container"
              id={`certifications-link-container-cloud-practitioner`}
            >
              <a href="https://www.credly.com/badges/e45a55dc-8303-4359-bfc4-1fd6b5237985/public_url"
                className="certifications-link"
                id={`certifications-link-cloud-practitioner`}
                target="__blank"
                rel="noopener noreferrer"
              >
              </a>
            </CertificationLink>
            <CertificationLink
              className="certifications-link-container"
              id={`certifications-link-container-developer-associate`}
            >
              <a href="https://www.credly.com/badges/b84a373c-5a8b-4edc-ba47-1b3809d3e470/public_url"
                className="certifications-link"
                id={`certifications-link-developer-associate`}
                target="__blank"
                rel="noopener noreferrer"
              >
              </a>
            </CertificationLink>
            <CertificationLink
              className="certifications-link-container"
              id={`certifications-link-container-sysops-admin`}
            >
              <a href="https://www.credly.com/badges/537e404c-fb51-4558-9d8c-296ed9576eb6/public_url"
                className="certifications-link"
                id={`certifications-link-sysops-admin`}
                target="__blank"
                rel="noopener noreferrer"
              >
              </a>
            </CertificationLink>
          </React.Fragment>
        ))
      </CertificationLinkGroup>
    </div>
  );
}

export default styled(Certifications)`
  position: relative;
  a {
    display: list-item; /* This has to be "list-item"                                               */
    list-style-type: none; /* See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type     */
    list-style-position: inside;
  }
`;