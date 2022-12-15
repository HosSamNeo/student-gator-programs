import { configureStore } from "@reduxjs/toolkit";
import parametersReducer from './parametersSlice';

export const Store = configureStore({
    reducer:{
        parameters:parametersReducer,
    }
})