import {combineReducers, configureStore} from "@reduxjs/toolkit"; 

const rootReducer = ({

}) 


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer, 
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
    })
}