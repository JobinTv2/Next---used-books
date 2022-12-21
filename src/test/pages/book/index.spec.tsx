import React from 'react';
import Book, { getStaticProps } from '../../../pages/book';
import { render, screen } from '@testing-library/react';
import '../../matchMedi.mock';
import { BookFormData } from '../../../pages/book/BookFormTypes';
import '@testing-library/jest-dom';

const data: any = {
  sys: {
    type: 'Array',
  },
  total: 1,
  skip: 0,
  limit: 100,
  items: [
    {
      metadata: {
        tags: [],
      },
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: '0uk0rl0l436k',
          },
        },
        id: 'TyA16n8unGpZ3uuuHHwYA',
        type: 'Entry',
        createdAt: '2022-11-30T11:58:28.916Z',
        updatedAt: '2022-11-30T11:58:43.722Z',
        environment: {
          sys: {
            id: 'dynamic-journey-mock',
            type: 'Link',
            linkType: 'Environment',
          },
        },
        revision: 2,
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'loanForm',
          },
        },
        locale: 'en-US',
      },
      fields: {
        heading: 'Order form',
        inputs: [
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3d8RkD9AicdcXOq8LXqmq4',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '48Zj66PftrC8AXuw6ZuhXa',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3c3MMx4qeZhJ5Mu1eEzeAG',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '6XNXPBnZz5A9yIZ5pAYDr',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4chPOBWZk6PckVm5qLDdTE',
            },
          },
          {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5T8IN6x9Nld7M8nu0LWL5O',
            },
          },
        ],
        submitButton: {
          sys: {
            type: 'Link',
            linkType: 'Entry',
            id: '1dFnTMLFb23jNgJxGaCwfU',
          },
        },
      },
    },
  ],
  includes: {
    Entry: [
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '1dFnTMLFb23jNgJxGaCwfU',
          type: 'Entry',
          createdAt: '2022-11-15T10:24:06.136Z',
          updatedAt: '2022-11-18T04:09:31.987Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 5,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'button',
            },
          },
          locale: 'en-US',
        },
        fields: {
          text: 'Submit',
          theme: 'primary',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '3c3MMx4qeZhJ5Mu1eEzeAG',
          type: 'Entry',
          createdAt: '2022-11-30T11:57:20.074Z',
          updatedAt: '2022-11-30T11:57:20.074Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Author',
          placeholder: 'Enter author name',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '3d8RkD9AicdcXOq8LXqmq4',
          type: 'Entry',
          createdAt: '2022-11-30T11:56:43.410Z',
          updatedAt: '2022-11-30T11:56:43.410Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Name',
          placeholder: 'Enter name',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '48Zj66PftrC8AXuw6ZuhXa',
          type: 'Entry',
          createdAt: '2022-11-30T11:57:05.896Z',
          updatedAt: '2022-11-30T11:57:05.896Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Title',
          placeholder: 'Enter title',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '4chPOBWZk6PckVm5qLDdTE',
          type: 'Entry',
          createdAt: '2022-11-30T11:58:01.314Z',
          updatedAt: '2022-11-30T11:58:01.314Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Description',
          placeholder: 'Enter description',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '5T8IN6x9Nld7M8nu0LWL5O',
          type: 'Entry',
          createdAt: '2022-11-30T11:58:19.474Z',
          updatedAt: '2022-11-30T11:58:19.474Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Category',
          placeholder: 'Enter category',
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: 'Link',
              linkType: 'Space',
              id: '0uk0rl0l436k',
            },
          },
          id: '6XNXPBnZz5A9yIZ5pAYDr',
          type: 'Entry',
          createdAt: '2022-11-30T11:57:42.686Z',
          updatedAt: '2022-11-30T11:57:42.686Z',
          environment: {
            sys: {
              id: 'dynamic-journey-mock',
              type: 'Link',
              linkType: 'Environment',
            },
          },
          revision: 1,
          contentType: {
            sys: {
              type: 'Link',
              linkType: 'ContentType',
              id: 'textInputWithLabel',
            },
          },
          locale: 'en-US',
        },
        fields: {
          name: 'Price',
          placeholder: 'Enter price',
        },
      },
    ],
  },
};
describe('Book', () => {
  it('renders book form', () => {
    render(<Book bookForm={data as BookFormData} />);
    expect(screen.getByTestId('book-form')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('author')).toBeInTheDocument();
    expect(screen.getByTestId('price')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(screen.getByTestId('category')).toBeInTheDocument();
    expect(screen.getByTestId('book-form-button')).toBeInTheDocument();
  });

  it('getStaticProps returns form data', async () => {
    const response = await getStaticProps();
    expect(response).toEqual({ props: { bookForm: data } });
  });
});
