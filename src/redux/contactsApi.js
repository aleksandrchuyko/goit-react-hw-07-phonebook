import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://630de8b7109c16b9abf041c4.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints(build) {
    return {
      getAllContacts: build.query({
        query: () => ({ url: '/contacts', method: 'get' }),
        providesTags: ['Contacts'],
      }),
      addContact: build.mutation({
        query: ({ name, phone }) => ({
          url: '/contacts',
          method: 'post',
          data: {
            name: name,
            phone: phone,
          },
        }),
        invalidatesTags: ['Contacts'],
      }),
      removeContact: build.mutation({
        query: contactId => ({
          url: `/contacts/${contactId}`,
          method: 'delete',
        }),
        invalidatesTags: ['Contacts'],
      }),
    };
  },
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;
