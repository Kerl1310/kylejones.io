import React from 'react';
import renderer from 'react-test-renderer';

import Reading from '../../now/reading';

const testBook = {
    isbn: '9780553803709',
    titleWithoutSeries: 'I, Robot',
    link: 'https://www.goodreads.com/book/show/41804.I_Robot'
}

const testAuthors = [{
    id: '16667',
    link: 'https://www.goodreads.com/author/show/16667.Isaac_Asimov',
    name: 'Isaac Asimov'
}]

describe('Reading', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Reading book={testBook} authors={testAuthors}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
