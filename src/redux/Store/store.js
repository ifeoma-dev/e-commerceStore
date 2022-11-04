import { configureStore } from '@reduxjs/toolkit';
import reducers from "../reducers/reducerIndex";

const store = configureStore({
    reducer: reducers
})

export default store;