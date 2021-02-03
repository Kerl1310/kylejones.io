import React from 'react';
import renderer from 'react-test-renderer';
import StackOverflowSocialButton from '../../socialButtons/stackOverflowSocialButton';

describe('StackOverflow Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StackOverflowSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
