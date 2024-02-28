import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        isErr: false,
        errMsg: '',
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
    },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;