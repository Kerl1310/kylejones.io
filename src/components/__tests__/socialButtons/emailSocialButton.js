import React from 'react';
import renderer from 'react-test-renderer';
import EmailSocialButton from '../../socialButtons/emailSocialButton';

describe('Email Social Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<EmailSocialButton />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
