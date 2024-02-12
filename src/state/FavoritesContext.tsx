import { createContext, useReducer, useMemo, useCallback } from 'react'

interface FavoriteProductState {
  favoriteProductIds: string[]
}

const initialFavoritesState: FavoriteProductState = {
  favoriteProductIds: []
}

type FavoritesContextType = {
  favoriteProductIds: string[]
  toggleItem: (id: string) => void
  removeItem: (id: string) => void
}

type FavoritesContextProviderProps = {
  children: React.ReactNode
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favoriteProductIds: [],
  toggleItem: (_id) => {},
  removeItem: (_id) => {}
})

type FavoritesToggle = {
  type: 'ON_FAVORITES_TOGGLE'
  id: string
}

type RemoveFromFavoritesAction = {
  type: 'REMOVE_FROM_FAVORITES'
  id: string
}

type Action = FavoritesToggle | RemoveFromFavoritesAction

const favoritesReducer = (
  state: FavoriteProductState,
  action: Action
): FavoriteProductState => {
  if (action.type === 'ON_FAVORITES_TOGGLE') {
    const updatedItems = [...state.favoriteProductIds]
    const id = updatedItems.find((id) => id === action.id)
    if (id) {
      return {
        favoriteProductIds: updatedItems.filter((id) => id !== action.id)
      }
    }

    return {
      favoriteProductIds: [...updatedItems, action.id]
    }
  }

  if (action.type === 'REMOVE_FROM_FAVORITES') {
    const updatedItems = [...state.favoriteProductIds]

    return {
      favoriteProductIds: updatedItems.filter((id) => id !== action.id)
    }
  }

  return state
}

const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialFavoritesState)

  const toggleItem = useCallback(
    (id: string) => dispatch({ type: 'ON_FAVORITES_TOGGLE', id }),
    []
  )
  const removeItem = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_FROM_FAVORITES', id }),
    []
  )

  const favoritesCtx = useMemo(
    (): FavoritesContextType => ({
      favoriteProductIds: state.favoriteProductIds,
      toggleItem,
      removeItem
    }),
    [toggleItem, state.favoriteProductIds, removeItem]
  )

  return (
    <FavoritesContext.Provider value={favoritesCtx}>{children}</FavoritesContext.Provider>
  )
}

export default FavoritesContextProvider
