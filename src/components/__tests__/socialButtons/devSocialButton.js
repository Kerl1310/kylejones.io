import React from 'react';
import renderer from 'react-test-renderer';
import DevSocialButton from '../../socialButtons/devSocialButton';

describe('DEV.to Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<DevSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
