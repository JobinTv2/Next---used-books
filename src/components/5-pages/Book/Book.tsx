import React, { useContext } from 'react';
import { TradeBookForm } from '../../3-organisms/TradeBookForm';

import tw from 'twin.macro';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { createBookApi } from '../../../lib/api/API';
import { message } from 'antd';
import { BookContext } from '../../../context/bookContext';
import { AppContext } from '../../../context/appContext';
import { useRouter } from 'next/router';

const tradeBookSchema = Yup.object().shape({
  name: Yup.string().required(),
  title: Yup.string().required(),
  description: Yup.string().required(),
  category: Yup.string().required(),
  is_sold: Yup.boolean().required(),
  owner_id: Yup.number().required(),
  author: Yup.string().required(),
  rating: Yup.number().required(),
  reviews: Yup.string().nullable(),
  price: Yup.number().required().min(1),
});

export const BookPage: () => JSX.Element = () => {
  //   const [openTradeModal, setOpenTradeModal] = useState<boolean>(false);
  const { dispatch } = useContext(BookContext);
  const { state: user } = useContext(AppContext);
  const route = useRouter();

  //   const handleOpenTrade: () => void = () => {
  //     setOpenTradeModal((prev) => !prev);
  //   };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: '',
      title: '',
      description: '',
      category: '',
      is_sold: false,
      owner_id: 1,
      author: '',
      rating: 1.0,
      reviews: '',
      price: 0,
    },
    validationSchema: tradeBookSchema,
    onSubmit: async (values) => {
      const key = 'updatable';
      message.loading({ content: 'Loading...', key });

      let response;
      try {
        const token = sessionStorage.getItem('token');
        response = await createBookApi(
          {
            ...values,
            owner_id: user.id,
            price: Number(values.price),
            category: String(values.category),
          },
          String(token)
        );
        if (!Object.prototype.hasOwnProperty.call(response, 'error')) {
          dispatch({ type: 'ADD_BOOK', payload: [response.data] });
          message.success({
            content: 'Created successfully.',
            key,
            duration: 2,
          });
          console.log(response, 'res');
          route.push('/home');
        } else {
          message.error({
            content: 'Error',
            key,
            duration: 2,
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Container>
      <TradeBookForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </Container>
  );
};

const Container = tw.div`px-72 pt-12 pb-8`;
