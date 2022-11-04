import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const asosAPI = createApi({
    reducerPath: 'asosAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://asos2.p.rapidapi.com'
    })
})