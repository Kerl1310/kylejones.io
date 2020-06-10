import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Tag = ({ className, text, path }) => {
  return (
    <Link
      id={text}
      className={className}
      to={path}
      target="__blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
};

export default styled(Tag)`
  background-color: #25303b;
  color: white;
  border-radius: 5px 5px 5px;
  border: 1px solid #25303b;
  padding: 2px 6px;
  margin-right: 5px;
  margin-bottom: 10px;
  display: inline-block;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;

  :hover {
    background-color: #616161;
    border-color: #616161;
    border-radius: 5px 5px 5px;
  }

  :active {
    background-color: #999999;
    border-color: #999999;
    border-radius: 5px 5px 5px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
`;
