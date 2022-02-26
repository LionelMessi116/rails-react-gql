import React from 'react';

interface Props {
  title: string;
}

const Book: React.FC<Props> = ({ title }) => <li>{title}</li>;

export default Book;
