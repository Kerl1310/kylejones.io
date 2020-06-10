import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Header headerLinks={[{ label: 'my-label', url: '/my-url' }]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
