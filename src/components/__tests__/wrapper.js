import React from 'react'
import renderer from 'react-test-renderer'

import Wrapper from '../wrapper'

describe('Wrapper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Wrapper className="my-wrapper" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
