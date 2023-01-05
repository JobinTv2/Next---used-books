import React from 'react';
import { BookPage } from '../../components/5-pages/Book';
import { getBookForm } from '../../lib/api/API';
import { BookFormData } from './BookFormTypes';

const Book: (props: { bookForm: BookFormData }) => JSX.Element = (props) => {
  const { bookForm } = props;
  return <BookPage formData={bookForm} />;
};
export default Book;

export const getServerSideProps: (ctx: any) => Promise<{
  props: {
    bookForm: BookFormData;
  };
}> = async (ctx) => {
  const cookie: { token: string } = ctx.req.cookies;
  let response = null;
  if (cookie?.token !== '') {
    response = await getBookForm(cookie?.token);
  }
  return {
    props: {
      bookForm: response,
    },
  };
};
