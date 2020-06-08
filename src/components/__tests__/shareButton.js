import React from 'react'
import renderer from 'react-test-renderer'

import ShareButtons from '../shareButtons'

describe('ShareButtons', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ShareButtons
          twitterHandle="my-twitter-handle"
          url="https://localhost/my-article"
          title="my-title"
          tags="my-tag"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
