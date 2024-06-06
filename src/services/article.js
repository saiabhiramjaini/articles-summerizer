// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// const rapidapiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// export const articleApi = createApi({
//   reducerPath: 'articlePath',
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
//     prepareHeaders: (headers)=>{
//         headers.set('x-rapidapi-key', rapidapiKey),
//         headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

//         return headers;
//     }
//   }),
//   endpoints: (builder) => ({
//     getSummary: builder.query({
//       query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
//     })
//   }),
//   refetchOnMountOrArgChange: true
// })


// export const {useLazyGetSummaryQuery} = articleApi;



import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', rapidApiKey),
        headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi