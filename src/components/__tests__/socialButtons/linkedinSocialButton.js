import React from 'react';
import renderer from 'react-test-renderer';
import LinkedInSocialButton from '../../socialButtons/linkedinSocialButton';

describe('LinkedIn Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<LinkedInSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
