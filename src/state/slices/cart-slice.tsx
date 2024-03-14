import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { CartProductType } from '../../models/CartProductType'

export type CartType = {
  items: CartProductType[]
  totalAmount: number
  totalQuantity: number
}

const initialCartState: CartType = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProductType>) {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        const itemIndex = state.items.findIndex((item) => item.id === action.payload.id)
        state.items[itemIndex] = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + action.payload.quantity
        }

        return {
          items: state.items,
          totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
          totalQuantity: state.totalQuantity + action.payload.quantity
        }
      }

      return {
        items: [...state.items, { ...action.payload }],
        totalAmount: state.totalAmount + action.payload.price * action.payload.quantity,
        totalQuantity: state.totalQuantity + action.payload.quantity
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const updatedItems = [...state.items]
      const itemIndex = updatedItems.findIndex((item) => item.id === action.payload)

      return {
        items: updatedItems.filter((item) => item.id !== action.payload),
        totalAmount:
          state.totalAmount -
          state.items[itemIndex].price * state.items[itemIndex].quantity,
        totalQuantity: state.totalQuantity - state.items[itemIndex].quantity
      }
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const updatedItems = [...state.items]
      const item = updatedItems.find((item) => item.id === action.payload)
      if (item) {
        const itemIndex = updatedItems.findIndex((item) => item.id === action.payload)
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1
        }

        return {
          items: updatedItems,
          totalAmount: state.totalAmount + updatedItems[itemIndex].price,
          totalQuantity: state.totalQuantity + 1
        }
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const updatedItems = [...state.items]
      const item = updatedItems.find((item) => item.id === action.payload)
      if (item) {
        const itemIndex = updatedItems.findIndex((item) => item.id === action.payload)
        if (updatedItems[itemIndex].quantity > 1) {
          updatedItems[itemIndex] = {
            ...updatedItems[itemIndex],
            quantity: updatedItems[itemIndex].quantity - 1
          }

          return {
            items: updatedItems,
            totalAmount: state.totalAmount - updatedItems[itemIndex].price,
            totalQuantity: state.totalQuantity - 1
          }
        }
      }
    }
  }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions // create actions object from the reducers, which will be send to redux, and redux will invoke the reducers
