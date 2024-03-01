import {configureStore} from '@reduxjs/toolkit'
import { filterReducer, userReducer } from '../slices'

const store = configureStore({
    reducer: {
        // Add your reducer here
        user:userReducer,
        filter: filterReducer
    },
})

export default store