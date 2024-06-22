import { configureStore } from '@reduxjs/toolkit';
import coinReducer from '../feature/coin/coinSlice'

export const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
