import React from 'react';
import renderer from 'react-test-renderer';

import TimelineElement from '../timeline';

const testJob = {
    job: {
        begin: {
            month: 10,
            year: 2020
        },
        description: "Hello World",
        url: "https://madetech.com/",
        company: "Made Tech",
        duration: "1 year"
    }
}

describe('Timeline Element', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TimelineElement job={testJob}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
