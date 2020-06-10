import React from 'react';
import renderer from 'react-test-renderer';

import Skills from '../skills';

describe('Skills', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Skills
          title="Skills"
          skills={[
            {
              name: 'my-skill',
              level: 0,
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
