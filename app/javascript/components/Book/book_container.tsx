import React from 'react';
import Book from './book';

const dummyData = {
  books: [{ id: '1', title: 'Active Rails' }],
};

const loading = false;

const Books = () => {
  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {dummyData.books.map((book) => (
          <Book {...book} key={book.id} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
