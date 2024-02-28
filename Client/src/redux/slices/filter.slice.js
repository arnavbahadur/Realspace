import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filteredData:[],
        filterQuery:{},
        isErr: false,
        errMsg: '',
    },
    reducers: {
        setFilteredData: (state, action) => {
            state.filteredData = action.payload
        },
        setFilterQuery: (state, action) => {
            state.filterQuery = action.payload
        }

    }
})