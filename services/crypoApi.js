import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



// export async function getServerSideProps(context){
    
    // const baseUrl = 'https://coinranking1.p.rapidapi.com';
    // const result = await fetch(baseUrl + `/coins?limit=${count}`,{
    //     method:'GET',
    //     headers:{
    //         'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    //         'x-rapidapi-key': 'ff5658a301msh7cffde7a7e5f683p1d4260jsnc1eff730cab0'
    //     }
    // });

    // console.log(result)
// }
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ff5658a301msh7cffde7a7e5f683p1d4260jsnc1eff730cab0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;