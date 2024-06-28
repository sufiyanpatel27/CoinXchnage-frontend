import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userInfoState {
    userInfo: Object
}

const initialState: userInfoState = {
    userInfo: {}
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<any[]>) => {
            console.log(state)
            console.log(action.payload)
            state.userInfo = action.payload;
        },
        // setCurrCoin: (state, action: PayloadAction<Object>) => {
        //   state.currCoin = action.payload;
        // }
    },
});

export const { setUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
