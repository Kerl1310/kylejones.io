import React from 'react';
import renderer from 'react-test-renderer';
import GithubSocialButton from '../../socialButtons/githubSocialButton';

describe('Github Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GithubSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
