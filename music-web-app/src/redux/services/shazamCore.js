import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 
            '867d1d75e8mshcc5ea22f0f51c51p1ae50djsncdcd444bd254');
            
            return headers;
        },    
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 
            '/charts/get-top-songs-in-world' }),
        getSongDetails: builder.query({ query: ({ songid }) => 
            `/songs/get_details?track_id=${songid}` }),
        getArtistDetails: builder.query({ query: ( adam_id ) => 
            `/artist/get-details?adam_id=${adam_id}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;
