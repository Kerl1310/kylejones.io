import React, { FC } from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { Book } from './book';
import { Author } from './author';

interface ReadingProps {
    book: Book;
    authors: Author[];
}

const Reading : FC<ReadingProps> = ({ book, authors }) => {

    const { t } = useTranslation();

    return (
        <li>
            <strong>{t("readingLabel")}: </strong>
            <a
                className={`book-link-${book.isbn}`}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {book.titleWithoutSeries}
            </a>{' '}
            by{' '}
            {authors.map(author => (
                <React.Fragment key={author.id}>
                    <a
                        className={'author-link'}
                        id={`author-link-${author.id}`}
                        href={author.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {author.name}
                    </a>
                </React.Fragment>
            ))}
        </li>
    )
};

export default Reading;