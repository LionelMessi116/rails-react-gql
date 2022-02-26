import { ApolloError, QueryResult, useQuery } from '@apollo/client';
import { BOOKS_QUERY } from 'queries/books';

const useBooksQuery = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY, {
    errorPolicy: 'none',
    fetchPolicy: 'no-cache',
  });

  return {
    loading,
    error,
    data,
  };
};

export { useBooksQuery };
