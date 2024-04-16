import { create } from 'zustand'
import { ICartItem, IProduct } from '../interfaces'

interface CartStore {
  cartItems: ICartItem[]
  increment: (productId: number) => void
  decrement: (cartItem: number) => void
  add: (cartItem: ICartItem) => void
  getQuantityOfProduct: (productId: number) => number | undefined
  setCustomValue: (productId: number, val: number) => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  add: (cartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, cartItem],
    })),
  increment: (productId) =>
    set((state) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product.id === productId,
      )
      if (existingIndex !== -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingIndex].quantity += 1
        return { cartItems: updatedCartItems }
      }
      return state
    }),
  decrement: (productId) =>
    set((state) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.product.id === productId,
      )
      if (existingIndex !== -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingIndex].quantity -= 1
        return { cartItems: updatedCartItems }
      }
      return state
    }),
  getQuantityOfProduct: (productId) => {
    const state = get()
    const cartItem = state.cartItems.find(
      (item) => item.product.id === productId,
    )
    return cartItem ? Number(cartItem.quantity) : undefined
  },
  setCustomValue: (productId: number, val: number) =>
    set((state) => {
      console.log(productId, val)

      const existingIndex = state.cartItems.findIndex(
        (item) => item.product.id === productId,
      )

      if (existingIndex !== -1) {
        const updatedCartItems = [...state.cartItems]
        updatedCartItems[existingIndex].quantity = val
        return { cartItems: updatedCartItems }
      }

      return state
    }),
}))
