import React from 'react'
import renderer from 'react-test-renderer'

import Timeline from '../timeline'

describe('Timeline', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Timeline className="my-timeline" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
