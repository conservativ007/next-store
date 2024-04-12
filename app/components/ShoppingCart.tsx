'use client'

import React, { useEffect, useState } from 'react'
import { ICartItem, IGetProducts, IProduct } from '../interfaces'
import axios from 'axios'
import ProductsList from './ProductsList'
import Cart from './Cart'

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const [products, setProducts] = useState<IProduct[]>([])

  const addToCart = (product: IProduct) => {
    console.log('addToCart')
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        (item) => item.product.id === product.id,
      )

      if (existingCartItemIndex !== -1) {
        // Если товар уже есть в корзине, создаем новый массив с обновленным значением quantity
        return prevCartItems.map((item, index) => {
          if (index === existingCartItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            }
          }
          return item
        })
      } else {
        // Если товара еще нет в корзине, добавляем его с начальным количеством 1
        return [...prevCartItems, { product, quantity: 1 }]
      }
    })
  }

  useEffect(() => {
    const URL = 'http://o-complex.com:1337/products?page=1&page_size=3'

    const getProducts = async () => {
      try {
        const response = await axios.get<IGetProducts>(URL, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        setProducts(response.data.products)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    getProducts()
  }, [])

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <div>
      <Cart cartItems={cartItems} />
      <ProductsList products={products} addToCart={addToCart} />
    </div>
  )
}
