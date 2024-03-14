import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cart-slice'
import { favoritesSlice } from './slices/favorites-slice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    favorites: favoritesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
