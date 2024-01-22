import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { CartProductType } from '../models/CartProductType'

export type CartType = {
  items: CartProductType[]
  totalAmount: number
}

const initialCartState: CartType = {
  items: [],
  totalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProductType>) {
      if (state.items.length === 0) {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
      state.items[itemIndex].quantity++
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload)
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1)
      }
      state.items[itemIndex].quantity--
    }
  }
})
