import React from 'react';
import renderer from 'react-test-renderer';
import MediumSocialButton from '../../socialButtons/mediumSocialButton';

describe('Medium Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MediumSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
