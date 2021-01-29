import React from 'react';
import renderer from 'react-test-renderer';

import Listening from '../now/listening';

const testArtist = {
    external_urls: {
        spotify: '6XyY86QOPPrYVGvF9ch6wz'
    },
    name: 'Linkin Park'
}

describe('Listening', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Listening artist={testArtist}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
