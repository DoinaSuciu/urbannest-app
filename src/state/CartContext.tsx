import { createContext, useReducer, useMemo, useCallback } from 'react'
import { CartProductType } from '../models/CartProductType'

export type CartType = {
  items: CartProductType[]
  totalAmount: number
}

const initialCartState: CartType = {
  items: [],
  totalAmount: 0
}

type CartContextType = {
  items: CartProductType[]
  totalAmount: number
  addItem: (item: CartProductType) => void
  removeItem: (id: string) => void
}

type CartContextProviderProps = {
  children: React.ReactNode
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: (_item) => {},
  removeItem: (_id) => {}
})

type AddToCartAction = {
  type: 'ADD_TO_CART'
  item: CartProductType
}

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART'
  id: string
}

type Action = AddToCartAction | RemoveFromCartAction

const cartReducer = (state: CartType, action: Action): CartType => {
  if (action.type === 'ADD_TO_CART') {
    const updatedItems = [...state.items]
    if (state.items.length === 0) {
      return {
        items: updatedItems.concat({ ...action.item, quantity: 1 }),
        totalAmount: state.totalAmount + action.item.price
      }
    }
    const itemIndex = updatedItems.findIndex((item) => item.id === action.item.id)
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity + 1
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const updatedItems = [...state.items]
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id)
    if (updatedItems[itemIndex].quantity === 1) {
      return {
        items: updatedItems.filter((item) => item.id !== action.id),
        totalAmount: state.totalAmount - state.items[itemIndex].price
      }
    }
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity - 1
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + state.items[itemIndex].price
    }
  }

  return state
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

  const addItem = useCallback(
    (item: CartProductType) => dispatch({ type: 'ADD_TO_CART', item }),
    []
  )
  const removeItem = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_FROM_CART', id }),
    []
  )

  const cartCtx = useMemo(
    (): CartContextType => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem,
      removeItem
    }),
    [addItem, cartState.items, cartState.totalAmount, removeItem]
  )

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
}

export default CartContextProvider
