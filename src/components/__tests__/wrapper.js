import React from 'react'
import renderer from 'react-test-renderer'
import siteConfig from '../../../data/siteConfig'

import Wrapper from '../Wrapper'

describe('Wrapper', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Wrapper className="my-wrapper" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
