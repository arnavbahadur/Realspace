import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
    name: 'property',
    initialState: {
        property: null,
        isErr: false,
        errMsg: '',
    },
    reducers: {
        setProperty: (state, action) => {
            state.property = action.payload
        },
        setIsErr: (state, action) => {
            state.isErr = action.payload
        },
        setErrMsg: (state, action) => {
            state.errMsg = action.payload
        }
    }
})