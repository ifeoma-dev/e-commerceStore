import { configureStore } from '@reduxjs/toolkit';
import reducers from "../reducers/reducerIndex";
// import { composeWithDevTools } from 'redux-devtools-extension'
// import ReduxPromise from "redux-promise";


const store = configureStore({
    reducer: reducers,
})

export default store;