import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from '../slices'

const store = configureStore({
    reducer: {
        // Add your reducer here
        user:userReducer
    },
})

export default store