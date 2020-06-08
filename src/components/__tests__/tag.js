import React from 'react'
import renderer from 'react-test-renderer'

import Tag from '../tag'

describe('Tag', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Tag className="my-tag" text="my-tag-text" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
