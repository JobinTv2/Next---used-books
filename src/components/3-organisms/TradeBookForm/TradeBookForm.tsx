import React from 'react';
import tw from 'twin.macro';
import { Button, Form, Input } from 'antd';
import { FormikHandlers, FormikErrors } from 'formik';
import { BookFormData } from '../../../pages/book/BookFormTypes';
interface Props {
  handleChange: FormikHandlers['handleChange'];
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  formData: BookFormData;
  errors: FormikErrors<{
    name: string;
    title: string;
    description: string;
    category: string;
    is_sold: boolean;
    owner_id: number;
    author: string;
    rating: number;
    reviews: string;
    price: number;
  }>;
}

export const TradeBookForm: React.FC<Props> = (props) => {
  const { handleChange, handleSubmit, formData, errors } = props;

  return (
    <Container data-testid="book-form">
      <Form
        layout="vertical"
        className="w-full"
        onFinish={() => {
          handleSubmit();
        }}
      >
        {formData?.items?.[0].fields.inputs.map((item) => {
          const field = formData?.includes.Entry.find(
            (el) => el.sys.id === item.sys.id
          );
          return (
            <Form.Item
              key={item.sys.id}
              label={field?.fields.name}
              className="font-sans font-semibold"
            >
              <Input
                placeholder={field?.fields?.placeholder}
                name={field?.fields.name?.toLowerCase()}
                onChange={handleChange}
                data-testid={field?.fields.name?.toLowerCase()}
                status={
                  Object.prototype.hasOwnProperty.call(
                    errors,
                    String(field?.fields.name)?.toLowerCase()
                  )
                    ? 'error'
                    : ''
                }
              />
            </Form.Item>
          );
        })}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = tw.div``;
