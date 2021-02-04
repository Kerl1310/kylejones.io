import React from 'react';
import renderer from 'react-test-renderer';

import TagListing from '../tagListing';

const testTag = {
    fieldValue: "aws",
    totalCount: 5
}

describe('Tag Listing', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TagListing tag={testTag}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
