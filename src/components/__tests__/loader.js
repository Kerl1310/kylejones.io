import React from 'react'
import renderer from 'react-test-renderer'

import Loader from '../loader'

describe('Loader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Loader className="my-loader" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
