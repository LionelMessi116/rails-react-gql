import React from 'react';

import Book from './book';

import { withProvider } from 'providers/graphql';
import { useAllBooksQuery } from 'graphql/types';

const Books = () => {
  const { data, loading, error } = useAllBooksQuery();

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </ul>
    </div>
  );
};

export default withProvider(Books);
