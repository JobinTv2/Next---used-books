import React from 'react';
import { BookPage } from '../../components/5-pages/Book';
import { getBookForm } from '../../lib/api/API';
import { BookFormData } from './BookFormTypes';

const Book: (props: { bookForm: BookFormData }) => JSX.Element = (props) => {
  const { bookForm } = props;
  console.log(bookForm, 'form');
  return <BookPage formData={bookForm} />;
};
export default Book;

export const getStaticProps: () => Promise<{
  props: {
    bookForm: BookFormData;
  };
}> = async () => {
  const response = await getBookForm();
  return {
    props: {
      bookForm: response,
    },
  };
};
