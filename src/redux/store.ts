import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../services/countries";

const rootReducer = combineReducers({
    [countriesApi.reducerPath]: countriesApi.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware)
    })
}