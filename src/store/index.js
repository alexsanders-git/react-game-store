import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './slices/cartSlice';
import gamesSlice from './slices/gamesSlice';

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		games: gamesSlice,
	}
})