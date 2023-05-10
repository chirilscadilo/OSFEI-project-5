import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponce, Book } from '../models/booksInterface';


export const getBooksApi = createApi({
    reducerPath: 'getBooksApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://www.googleapis.com/books/v1/'}),
    endpoints:(builder)=>({
        getBooks: builder.query<ApiResponce,string>({
            query:(sencence)=>({
                url:`volumes?q=${sencence? sencence:'react'}&maxResults=40&key=AIzaSyB7YAZWRmrF3OlvU_9CG7vx7qfS8bVZtzE`,
            })
        }),
        getBooksById: builder.query<Book,string|undefined|TrustedHTML>({
            query:(id)=>({
                url:`volumes/${id}?key=AIzaSyB7YAZWRmrF3OlvU_9CG7vx7qfS8bVZtzE`
            })
        }),
    }),
})

export const { useGetBooksQuery, useGetBooksByIdQuery } = getBooksApi;