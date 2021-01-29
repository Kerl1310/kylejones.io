import React from 'react';
import renderer from 'react-test-renderer';

import Playing from '../now/playing';

const testGame = {
    steamId: '220',
    name: 'Half Life 2'
}

describe('Playing', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Playing game={testGame}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
