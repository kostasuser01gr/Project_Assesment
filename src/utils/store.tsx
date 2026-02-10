// Simple state management using Context + Hooks
import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from 'react'

// Define your global state shape
export interface AppState {
  user: {
    id: string | null
    name: string | null
    email: string | null
    isAuthenticated: boolean
  }
  cart: {
    items: Array<{
      id: string
      name: string
      price: number
      quantity: number
      image?: string
    }>
    total: number
  }
  ui: {
    isSidebarOpen: boolean
    isCartOpen: boolean
    theme: 'light' | 'dark' | 'system'
  }
}

// Initial state
const initialState: AppState = {
  user: {
    id: null,
    name: null,
    email: null,
    isAuthenticated: false,
  },
  cart: {
    items: [],
    total: 0,
  },
  ui: {
    isSidebarOpen: false,
    isCartOpen: false,
    theme: 'system',
  },
}

// Action types
export type AppAction =
  | { type: 'USER_LOGIN'; payload: { id: string; name: string; email: string } }
  | { type: 'USER_LOGOUT' }
  | { type: 'CART_ADD_ITEM'; payload: AppState['cart']['items'][0] }
  | { type: 'CART_REMOVE_ITEM'; payload: { id: string } }
  | { type: 'CART_UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CART_CLEAR' }
  | { type: 'UI_TOGGLE_SIDEBAR' }
  | { type: 'UI_TOGGLE_CART' }
  | { type: 'UI_SET_THEME'; payload: 'light' | 'dark' | 'system' }

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: {
          ...action.payload,
          isAuthenticated: true,
        },
      }

    case 'USER_LOGOUT':
      return {
        ...state,
        user: {
          id: null,
          name: null,
          email: null,
          isAuthenticated: false,
        },
      }

    case 'CART_ADD_ITEM': {
      const existingItem = state.cart.items.find((item) => item.id === action.payload.id)
      let newItems: AppState['cart']['items']

      if (existingItem) {
        newItems = state.cart.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newItems = [...state.cart.items, action.payload]
      }

      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        ...state,
        cart: {
          items: newItems,
          total,
        },
      }
    }

    case 'CART_REMOVE_ITEM': {
      const newItems = state.cart.items.filter((item) => item.id !== action.payload.id)
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        ...state,
        cart: {
          items: newItems,
          total,
        },
      }
    }

    case 'CART_UPDATE_QUANTITY': {
      // Remove item if quantity drops to 0 or below
      if (action.payload.quantity <= 0) {
        const newItems = state.cart.items.filter((item) => item.id !== action.payload.id)
        const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
        return { ...state, cart: { items: newItems, total } }
      }
      const newItems = state.cart.items.map((item) =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      )
      const total = newItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

      return {
        ...state,
        cart: {
          items: newItems,
          total,
        },
      }
    }

    case 'CART_CLEAR':
      return {
        ...state,
        cart: {
          items: [],
          total: 0,
        },
      }

    case 'UI_TOGGLE_SIDEBAR':
      return {
        ...state,
        ui: {
          ...state.ui,
          isSidebarOpen: !state.ui.isSidebarOpen,
        },
      }

    case 'UI_TOGGLE_CART':
      return {
        ...state,
        ui: {
          ...state.ui,
          isCartOpen: !state.ui.isCartOpen,
        },
      }

    case 'UI_SET_THEME':
      return {
        ...state,
        ui: {
          ...state.ui,
          theme: action.payload,
        },
      }

    default:
      return state
  }
}

// Context
const AppStateContext = createContext<AppState | undefined>(undefined)
const AppDispatchContext = createContext<Dispatch<AppAction> | undefined>(undefined)

// Provider
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

// Hooks
export function useAppState() {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within AppProvider')
  }
  return context
}

export function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within AppProvider')
  }
  return context
}

// Convenience hook
export function useApp() {
  return {
    state: useAppState(),
    dispatch: useAppDispatch(),
  }
}

// Alias for backwards compatibility
export const useAppContext = useApp
