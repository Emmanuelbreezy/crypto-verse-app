import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/crypoApi';
import { cryptoNewsApi } from '../services/crypoNewsApi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
})