import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface FavoriteProductState {
  favoriteProductIds: string[]
}

const initialFavoritesState: FavoriteProductState = {
  favoriteProductIds: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    onFavoritesToggle(state, action: PayloadAction<string>) {
      const id = state.favoriteProductIds.find((id) => id === action.payload)
      if (id) {
        return {
          favoriteProductIds: state.favoriteProductIds.filter(
            (id) => id !== action.payload
          )
        }
      }
      state.favoriteProductIds.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      return {
        favoriteProductIds: state.favoriteProductIds.filter((id) => id !== action.payload)
      }
    }
  }
})

export const { onFavoritesToggle, removeFromFavorites } = favoritesSlice.actions
