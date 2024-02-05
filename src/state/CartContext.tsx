import { createContext, useReducer, useMemo, useCallback } from 'react'
import { CartProductType } from '../models/CartProductType'

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

type CartContextType = {
  items: CartProductType[]
  totalAmount: number
  totalQuantity: number
  addItem: (item: CartProductType) => void
  removeItem: (id: string) => void
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
}

type CartContextProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
  addItem: (_item) => {},
  removeItem: (_id) => {},
  incrementQuantity: (_id) => {},
  decrementQuantity: (_id) => {}
})

type AddToCartAction = {
  type: 'ADD_TO_CART'
  item: CartProductType
}

type IncrementAction = {
  type: 'INCREMENT_QUANTITY'
  id: string
}

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART'
  id: string
}

type DecrementAction = {
  type: 'DECREMENT_QUANTITY'
  id: string
}

type Action = AddToCartAction | RemoveFromCartAction | IncrementAction | DecrementAction

const cartReducer = (state: CartType, action: Action): CartType => {
  if (action.type === 'ADD_TO_CART') {
    const updatedItems = [...state.items]
    const item = updatedItems.find((item) => item.id === action.item.id)
    if (item) {
      const itemIndex = updatedItems.findIndex((item) => item.id === action.item.id)
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity + action.item.quantity
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price * action.item.quantity,
        totalQuantity: state.totalQuantity + action.item.quantity
      }
    }

    return {
      items: [...updatedItems, { ...action.item }],
      totalAmount: state.totalAmount + action.item.price * action.item.quantity,
      totalQuantity: state.totalQuantity + action.item.quantity
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const updatedItems = [...state.items]
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id)

    return {
      items: updatedItems.filter((item) => item.id !== action.id),
      totalAmount:
        state.totalAmount -
        state.items[itemIndex].price * state.items[itemIndex].quantity,
      totalQuantity: state.totalQuantity - state.items[itemIndex].quantity
    }
  }

  if (action.type === 'INCREMENT_QUANTITY') {
    const updatedItems = [...state.items]
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id)
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      quantity: updatedItems[itemIndex].quantity + 1
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + state.items[itemIndex].price,
      totalQuantity: state.totalQuantity + 1
    }
  }

  if (action.type === 'DECREMENT_QUANTITY') {
    const updatedItems = [...state.items]
    const itemIndex = updatedItems.findIndex((item) => item.id === action.id)
    if (updatedItems[itemIndex].quantity > 1) {
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        quantity: updatedItems[itemIndex].quantity - 1
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount - state.items[itemIndex].price,
        totalQuantity: state.totalQuantity - 1
      }
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount,
      totalQuantity: state.totalQuantity
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

  const incrementQuantity = useCallback(
    (id: string) => dispatch({ type: 'INCREMENT_QUANTITY', id }),
    []
  )

  const decrementQuantity = useCallback(
    (id: string) => dispatch({ type: 'DECREMENT_QUANTITY', id }),
    []
  )

  const cartCtx = useMemo(
    (): CartContextType => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      totalQuantity: cartState.totalQuantity,
      addItem,
      removeItem,
      incrementQuantity,
      decrementQuantity
    }),
    [
      addItem,
      cartState.items,
      cartState.totalAmount,
      cartState.totalQuantity,
      removeItem,
      incrementQuantity,
      decrementQuantity
    ]
  )

  return <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
}

export default CartContextProvider
