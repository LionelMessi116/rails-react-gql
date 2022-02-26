import React from 'react';

import Book from './book';
import { useBooksQuery } from 'hooks/use_books_query';

import { withProvider } from 'providers/graphql';

const Books = () => {
  const { data, loading, error } = useBooksQuery();

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </ul>
    </div>
  );
};

export default withProvider(Books);
